/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');

/**
 * Converte formato ISO (2025-01-10T00:00:00.000Z)
 * para formato MySQL DATETIME (2025-01-10 00:00:00)
 */
function toMySQLDate(isoDate) {
  return new Date(isoDate).toISOString().slice(0, 19).replace('T', ' ');
}

/**
 * Listar manutenções
 */
const manutencoesGET = (params) =>
  new Promise((resolve, reject) => {
    try {
      const id_veiculo = params?.id_veiculo; // filtro correto

      let query = "SELECT * FROM manutencoes WHERE 1=1";
      const values = [];

      if (id_veiculo) {
        query += " AND id_veiculo = ?";
        values.push(id_veiculo);
      }

      sql.query(query, values, (err, result) => {
        if (err) {
          return reject(Service.rejectResponse(err.sqlMessage, 500));
        }
        return resolve(Service.successResponse(result));
      });
    } catch (e) {
      return reject(Service.rejectResponse(e.message, 405));
    }
  });


/**
 * Criar manutenção
 */
const manutencoesPOST = (params) =>
  new Promise((resolve, reject) => {
    try {
      const manutencao =
        params?.body ||
        params?.manutencao ||
        params;

      if (
        !manutencao.id_veiculo ||
        !manutencao.descricao ||
        !manutencao.data_manutencao
      ) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const dataMysql = toMySQLDate(manutencao.data_manutencao);

      const sqlQuery = `
        INSERT INTO manutencoes
        (id_veiculo, descricao, data_manutencao, custo)
        VALUES (?, ?, ?, ?)
      `;

      const values = [
        manutencao.id_veiculo,
        manutencao.descricao,
        dataMysql,
        manutencao.custo || 0
      ];

      sql.query(sqlQuery, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        resolve(
          Service.successResponse({
            id_manutencao: result.insertId,
            ...manutencao,
            data_manutencao: dataMysql
          })
        );
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Obter manutenção por ID
 */
const manutencoesIdGET = ({ id }) =>
  new Promise((resolve, reject) => {
    try {
      sql.query(
        "SELECT * FROM manutencoes WHERE id_manutencao = ?",
        [id],
        (err, result) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
          if (result.length === 0)
            return reject(Service.rejectResponse("Manutenção não encontrada", 404));

          resolve(Service.successResponse(result[0]));
        }
      );
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Atualizar manutenção
 */
const manutencoesIdPUT = (params) =>
  new Promise((resolve, reject) => {
    try {
      const id = params.id;
      const manutencao =
        params?.body ||
        params?.manutencao ||
        params;

      if (
        !manutencao.id_veiculo ||
        !manutencao.descricao ||
        !manutencao.data_manutencao
      ) {
        return reject(Service.rejectResponse("Dados inválidos", 400));
      }

      const dataMysql = toMySQLDate(manutencao.data_manutencao);

      const sqlQuery = `
        UPDATE manutencoes SET
          id_veiculo = ?,
          descricao = ?,
          data_manutencao = ?,
          custo = ?
        WHERE id_manutencao = ?
      `;

      const values = [
        manutencao.id_veiculo,
        manutencao.descricao,
        dataMysql,
        manutencao.custo || 0,
        id
      ];

      sql.query(sqlQuery, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));
        if (result.affectedRows === 0)
          return reject(Service.rejectResponse("Manutenção não encontrada", 404));

        resolve(
          Service.successResponse({
            id_manutencao: id,
            ...manutencao,
            data_manutencao: dataMysql
          })
        );
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

/**
 * Eliminar manutenção
 */
const manutencoesIdDELETE = ({ id }) =>
  new Promise((resolve, reject) => {
    try {
      sql.query(
        "DELETE FROM manutencoes WHERE id_manutencao = ?",
        [id],
        (err, result) => {
          if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));
          if (result.affectedRows === 0)
            return reject(Service.rejectResponse("Manutenção não encontrada", 404));

          resolve(Service.successResponse({ message: "Manutenção eliminada com sucesso" }));
        }
      );
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });

module.exports = {
  manutencoesGET,
  manutencoesPOST,
  manutencoesIdGET,
  manutencoesIdPUT,
  manutencoesIdDELETE,
};
