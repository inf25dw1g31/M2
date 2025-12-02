/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');

/**
 * ===========================
 * LISTAR CLIENTES
 * ===========================
 */
const clientesGET = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      let query = `
        SELECT 
          c.*,

          -- Cliente tem reservas?
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) > 0 AS tem_reservas,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_ultima_reserva,

          -- Quantidade total de reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) AS total_reservas,

          -- Lista de IDs das reservas
          (
            SELECT JSON_ARRAYAGG(r.id_reserva)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) AS reservas_ids

        FROM clientes c
      `;

      sql.query(query, [], (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
        resolve(Service.successResponse(result));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });


/**
 * ===========================
 * CRIAR CLIENTE
 * ===========================
 */
const clientesPOST = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const c = params?.body;   // <-- CORRETO

      if (!c || !c.nome || !c.email || !c.nif) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        INSERT INTO clientes (nome, email, telefone, nif, morada)
        VALUES (?, ?, ?, ?, ?)
      `;

      const values = [
        c.nome,
        c.email,
        c.telefone || null,
        c.nif,
        c.morada || null
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        resolve(
          Service.successResponse({
            id_cliente: result.insertId,
            ...c
          })
        );
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });

/**
 * ===========================
 * OBTER CLIENTE POR ID
 * ===========================
 */
const clientesIdGET = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const query = `
        SELECT
          c.*,

          -- Cliente tem reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) > 0 AS tem_reservas,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_ultima_reserva,

          -- Total de reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) AS total_reservas,

          -- Lista de IDs das reservas
          (
            SELECT JSON_ARRAYAGG(r.id_reserva)
            FROM reservas r
            WHERE r.id_cliente = c.id_cliente
          ) AS reservas_ids

        FROM clientes c
        WHERE c.id_cliente = ?
      `;

      sql.query(query, [id], (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        if (result.length === 0)
          return reject(Service.rejectResponse("Cliente não encontrado", 404));

        resolve(Service.successResponse(result[0]));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });


/**
 * ===========================
 * ATUALIZAR CLIENTE
 * ===========================
 */
const clientesIdPUT = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const id = params.id;
      const c = params?.body;

      if (!c || !c.nome || !c.email || !c.nif) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        UPDATE clientes SET
          nome = ?, email = ?, telefone = ?, nif = ?, morada = ?
        WHERE id_cliente = ?
      `;

      const values = [
        c.nome,
        c.email,
        c.telefone || null,
        c.nif,
        c.morada || null,
        id
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        if (result.affectedRows === 0)
          return reject(Service.rejectResponse("Cliente não encontrado", 404));

        resolve(Service.successResponse({ id_cliente: id, ...c }));
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });

/**
 * ===========================
 * ELIMINAR CLIENTE
 * ===========================
 * Só permite apagar clientes com todas as reservas concluídas
 */
const clientesIdDELETE = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      // 1) Pegar todas as reservas do cliente
      sql.query(
        "SELECT estado FROM reservas WHERE id_cliente = ?",
        [id],
        (err, reservas) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

          // Se tiver reservas NÃO concluídas → BLOQUEIA
          const temNaoConcluidas = reservas.some(
            r => r.estado !== "concluida"
          );

          if (temNaoConcluidas) {
            return reject(
              Service.rejectResponse(
                "Não é possível eliminar o cliente: possui reservas ativas ou canceladas.",
                400
              )
            );
          }

          // Se tem reservas concluídas → PODE apagar
          // MySQL vai deixar porque todas são concluídas
          sql.query(
            "DELETE FROM clientes WHERE id_cliente = ?",
            [id],
            (err, result) => {
              if (err) {
                // Caso raro: erro do banco
                return reject(Service.rejectResponse(err.sqlMessage, 500));
              }

              if (result.affectedRows === 0) {
                return reject(Service.rejectResponse("Cliente não encontrado", 404));
              }

              resolve(Service.successResponse({
                message: "Cliente eliminado com sucesso"
              }));
            }
          );
        }
      );
    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });


module.exports = {
  clientesGET,
  clientesPOST,
  clientesIdGET,
  clientesIdPUT,
  clientesIdDELETE,
};
