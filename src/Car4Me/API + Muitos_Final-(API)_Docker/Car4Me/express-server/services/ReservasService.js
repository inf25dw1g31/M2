/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');

/**
 * Converte formato ISO (2025-01-20T00:00:00.000Z)
 * para formato MySQL DATETIME (2025-01-20 00:00:00)
 */
function toMySQLDate(isoDate) {
  return new Date(isoDate).toISOString().slice(0, 19).replace('T', ' ');
}

/**
 * Listar reservas (com filtros opcionais)
 */
const reservasGET = (params) =>
  new Promise((resolve, reject) => {
    try {
      const estado = params?.estado;
      const id_cliente = params?.id_cliente;   // <-- corrigido
      const id_veiculo = params?.id_veiculo;   // <-- corrigido

      let query = "SELECT * FROM reservas WHERE 1=1";
      const values = [];

      if (estado && estado.trim() !== "") {
        query += " AND estado = ?";
        values.push(estado.trim());
      }

      if (id_cliente && id_cliente !== "" && !isNaN(id_cliente)) {
        query += " AND id_cliente = ?";
        values.push(Number(id_cliente));
      }

      if (id_veiculo && id_veiculo !== "" && !isNaN(id_veiculo)) {
        query += " AND id_veiculo = ?";
        values.push(Number(id_veiculo));
      }

      console.log("### SQL:", query);
      console.log("### VALUES:", values);

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
        resolve(Service.successResponse(result));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });


/**
 * Criar reserva
 */
const reservasPOST = (params) =>
  new Promise((resolve, reject) => {
    try {
      const reserva =
        params?.body ||
        params?.reserva ||
        params;

      if (
        !reserva.id_cliente ||
        !reserva.id_veiculo ||
        !reserva.id_funcionario ||
        !reserva.data_inicio ||
        !reserva.data_fim
      ) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const sqlQuery = `
        INSERT INTO reservas
        (id_cliente, id_veiculo, id_funcionario, data_inicio, data_fim, preco_total, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        reserva.id_cliente,
        reserva.id_veiculo,
        reserva.id_funcionario,
        toMySQLDate(reserva.data_inicio),
        toMySQLDate(reserva.data_fim),
        reserva.preco_total || 0,
        reserva.estado || 'ativa'
      ];

      sql.query(sqlQuery, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        resolve(
          Service.successResponse({
            id_reserva: result.insertId,
            ...reserva,
            data_inicio: toMySQLDate(reserva.data_inicio),
            data_fim: toMySQLDate(reserva.data_fim)
          })
        );
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Obter reserva por ID
 */
const reservasIdGET = ({ id }) =>
  new Promise((resolve, reject) => {
    try {
      sql.query(
        "SELECT * FROM reservas WHERE id_reserva = ?",
        [id],
        (err, result) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
          if (result.length === 0)
            return reject(Service.rejectResponse("Reserva não encontrada", 404));

          resolve(Service.successResponse(result[0]));
        }
      );
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Atualizar reserva
 */
const reservasIdPUT = (params) =>
  new Promise((resolve, reject) => {
    try {
      const id = params.id;
      const reserva =
        params?.body ||
        params?.reserva ||
        params;

      if (
        !reserva.id_cliente ||
        !reserva.id_veiculo ||
        !reserva.id_funcionario ||
        !reserva.data_inicio ||
        !reserva.data_fim
      ) {
        return reject(Service.rejectResponse("Dados inválidos", 400));
      }

      const sqlQuery = `
        UPDATE reservas SET
          id_cliente = ?,
          id_veiculo = ?,
          id_funcionario = ?,
          data_inicio = ?,
          data_fim = ?,
          preco_total = ?,
          estado = ?
        WHERE id_reserva = ?
      `;

      const values = [
        reserva.id_cliente,
        reserva.id_veiculo,
        reserva.id_funcionario,
        toMySQLDate(reserva.data_inicio),
        toMySQLDate(reserva.data_fim),
        reserva.preco_total || 0,
        reserva.estado || 'ativa',
        id
      ];

      sql.query(sqlQuery, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));
        if (result.affectedRows === 0)
          return reject(Service.rejectResponse("Reserva não encontrada", 404));

        resolve(
          Service.successResponse({
            id_reserva: id,
            ...reserva,
            data_inicio: toMySQLDate(reserva.data_inicio),
            data_fim: toMySQLDate(reserva.data_fim)
          })
        );
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Eliminar reserva
 */
const reservasIdDELETE = ({ id }) =>
  new Promise((resolve, reject) => {
    try {
      sql.query(
        "DELETE FROM reservas WHERE id_reserva = ?",
        [id],
        (err, result) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
          if (result.affectedRows === 0)
            return reject(Service.rejectResponse("Reserva não encontrada", 404));

          resolve(Service.successResponse({
            message: "Reserva eliminada com sucesso"
          }));
        }
      );
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

module.exports = {
  reservasGET,
  reservasPOST,
  reservasIdGET,
  reservasIdPUT,
  reservasIdDELETE,
};
