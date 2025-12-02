/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');

/**
 * Listar funcionários
 */
const funcionariosGET = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const query = `
        SELECT 
          f.*,

          -- Funcionário tem reservas?
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) > 0 AS tem_reservas,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_ultima_reserva,

          -- Total de reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) AS total_reservas,

          -- Lista de IDs das reservas
          (
            SELECT JSON_ARRAYAGG(r.id_reserva)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) AS reservas_ids

        FROM funcionarios f
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
 * Criar funcionário
 */
const funcionariosPOST = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const funcionario = params?.body;

      if (!funcionario || !funcionario.nome || !funcionario.email) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        INSERT INTO funcionarios (nome, email, cargo, telefone)
        VALUES (?, ?, ?, ?)
      `;

      const values = [
        funcionario.nome,
        funcionario.email,
        funcionario.cargo || null,
        funcionario.telefone || null
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        resolve(Service.successResponse({
          id_funcionario: result.insertId,
          ...funcionario
        }));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Obter funcionário por ID
 */
const funcionariosIdGET = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const query = `
        SELECT
          f.*,

          -- Funcionário tem reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) > 0 AS tem_reservas,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_ultima_reserva,

          -- Total de reservas associado ao funcionário
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) AS total_reservas,

          -- Lista de IDs das reservas
          (
            SELECT JSON_ARRAYAGG(r.id_reserva)
            FROM reservas r
            WHERE r.id_funcionario = f.id_funcionario
          ) AS reservas_ids

        FROM funcionarios f
        WHERE f.id_funcionario = ?
      `;

      sql.query(query, [id], (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        if (result.length === 0)
          return reject(Service.rejectResponse("Funcionário não encontrado", 404));

        resolve(Service.successResponse(result[0]));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Atualizar funcionário
 */
const funcionariosIdPUT = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const id = params.id;
      const funcionario = params?.body;

      if (!funcionario || !funcionario.nome || !funcionario.email) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        UPDATE funcionarios SET
          nome = ?,
          email = ?,
          cargo = ?,
          telefone = ?
        WHERE id_funcionario = ?
      `;

      const values = [
        funcionario.nome,
        funcionario.email,
        funcionario.cargo || null,
        funcionario.telefone || null,
        id
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));
        if (result.affectedRows === 0)
          return reject(Service.rejectResponse("Funcionário não encontrado", 404));

        resolve(Service.successResponse({
          id_funcionario: id,
          ...funcionario
        }));
      });
      
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Eliminar funcionário
 * — Bloqueia se o funcionário tiver reservas ativas
 */
const funcionariosIdDELETE = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      // 1) Verificar se existe
      sql.query(
        "SELECT * FROM funcionarios WHERE id_funcionario = ?",
        [id],
        (err, result) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
          if (result.length === 0)
            return reject(Service.rejectResponse("Funcionário não encontrado", 404));

          // 2) Verificar reservas ativas associadas
          sql.query(
            "SELECT * FROM reservas WHERE id_funcionario = ? AND estado = 'ativa'",
            [id],
            (err2, reservasAtivas) => {
              if (err2) return reject(Service.rejectResponse(err2.sqlMessage, 500));

              if (reservasAtivas.length > 0) {
                return reject(Service.rejectResponse(
                  "Não é possível eliminar: funcionário possui reservas ativas.",
                  400
                ));
              }

              // 3) Eliminar funcionário
              sql.query(
                "DELETE FROM funcionarios WHERE id_funcionario = ?",
                [id],
                (err3, result3) => {
                  if (err3)
                    return reject(Service.rejectResponse(err3.sqlMessage, 500));

                  resolve(Service.successResponse({
                    message: "Funcionário eliminado com sucesso."
                  }));
                }
              );
            }
          );
        }
      );

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

module.exports = {
  funcionariosGET,
  funcionariosPOST,
  funcionariosIdGET,
  funcionariosIdPUT,
  funcionariosIdDELETE,
};
