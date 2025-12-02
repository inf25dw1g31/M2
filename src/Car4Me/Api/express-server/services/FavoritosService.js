/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');




/**
 * =====================================================
 *   LISTAR TODAS AS RELAÇÕES FAVORITOS
 * =====================================================
 *
 * Endpoint: GET /favoritos
 */
const favoritosGET = () =>
  new Promise((resolve, reject) => {
    try {
      const query = `
        SELECT id_cliente, id_veiculo
        FROM clientes_favoritos
      `;

      sql.query(query, (err, rows) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        // Agrupamento (cliente → [veículos])
        const agrupado = [];

        rows.forEach(({ id_cliente, id_veiculo }) => {
          let cliente = agrupado.find(c => c.id_cliente === id_cliente);

          if (!cliente) {
            cliente = { id_cliente, veiculos: [] };
            agrupado.push(cliente);
          }

          cliente.veiculos.push(id_veiculo);
        });

        resolve(Service.successResponse(agrupado));
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });
/**
 * ==========================================
 *   REMOVER FAVORITO
 * ==========================================
 */
const clientesIdClienteFavoritosIdVeiculoDELETE = ({ id_cliente, id_veiculo }) =>
  new Promise((resolve, reject) => {
    try {
      const query = `
        DELETE FROM clientes_favoritos
        WHERE id_cliente = ? AND id_veiculo = ?
      `;

      sql.query(query, [id_cliente, id_veiculo], (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        if (result.affectedRows === 0) {
          return reject(Service.rejectResponse("Favorito não encontrado", 404));
        }

        resolve(Service.successResponse({
          message: "Veículo removido dos favoritos"
        }));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });




/**
 * =====================================================
 *   CRIAR UMA OU VÁRIAS RELAÇÕES FAVORITOS
 * =====================================================
 *
 * Endpoint: POST /favoritos
 */
const favoritosPOST = ({ body }) =>
  new Promise((resolve, reject) => {
    try {
      const lista = body; // <-- Aqui está a magia

      if (!Array.isArray(lista) || lista.length === 0) {
        return reject(Service.rejectResponse("O body deve ser uma lista de favoritos", 400));
      }

      const values = lista.map(item => [item.id_cliente, item.id_veiculo]);

      const query = `
        INSERT INTO clientes_favoritos (id_cliente, id_veiculo)
        VALUES ?
      `;

      sql.query(query, [values], (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return reject(Service.rejectResponse("Uma das relações já existe", 400));
          }
          return reject(Service.rejectResponse(err.sqlMessage, 500));
        }

        resolve(
          Service.successResponse({
            inseridos: result.affectedRows
          })
        );
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });


  /**
 * ==========================================
 *   ATUALIZAR FAVORITO (TROCAR VEÍCULO)
 * ==========================================
 */
/**
 * Atualizar favorito (substituir veículo favorito)
 * Atualiza a relação específica da URL:
 * (id_cliente, id_veiculo) -> (id_cliente, novo_id_veiculo)
 */
const clientesIdClienteFavoritosIdVeiculoPUT = (params) =>
  new Promise((resolve, reject) => {
    try {
      const { id_cliente, id_veiculo } = params;
      const body = params.body || {};
      const { novo_id_veiculo } = body;

      if (!novo_id_veiculo) {
        return reject(Service.rejectResponse("novo_id_veiculo é obrigatório", 400));
      }

      // 1) Atualizar a relação diretamente
      const updateQuery = `
        UPDATE clientes_favoritos
        SET id_veiculo = ?
        WHERE id_cliente = ? AND id_veiculo = ?
      `;

      sql.query(updateQuery, [novo_id_veiculo, id_cliente, id_veiculo], (err, result) => {
        if (err) {
          // Violação de PK (relação já existe)
          if (err.code === "ER_DUP_ENTRY") {
            return reject(Service.rejectResponse("Favorito já existe", 400));
          }

          return reject(Service.rejectResponse(err.sqlMessage, 500));
        }

        // Nenhuma linha atualizada → favorito não existe
        if (result.affectedRows === 0) {
          return reject(Service.rejectResponse("Favorito original não encontrado", 404));
        }

        // Sucesso
        resolve(
          Service.successResponse({
            message: "Favorito atualizado com sucesso",
            atualizado_de: id_veiculo,
            atualizado_para: novo_id_veiculo
          })
        );
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });



/**
 * ==========================================
 *   ATUALIZAR CLIENTE ASSOCIADO AO FAVORITO
 * ==========================================
 */
const clientesIdClienteFavoritosIdVeiculoClientePUT = (params) =>
  new Promise((resolve, reject) => {
    try {
      const { id_cliente, id_veiculo } = params;
      const { novo_id_cliente } = params.body;

      if (!novo_id_cliente) {
        return reject(Service.rejectResponse("novo_id_cliente é obrigatório", 400));
      }

      const updateQuery = `
        UPDATE clientes_favoritos
        SET id_cliente = ?
        WHERE id_cliente = ? AND id_veiculo = ?
      `;

      sql.query(updateQuery, [novo_id_cliente, id_cliente, id_veiculo], (err, result) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return reject(Service.rejectResponse("Este cliente já tem este favorito", 400));
          }
          return reject(Service.rejectResponse(err.sqlMessage, 500));
        }

        if (result.affectedRows === 0) {
          return reject(Service.rejectResponse("Favorito original não encontrado", 404));
        }

        resolve(Service.successResponse({
          message: "Cliente associado ao favorito atualizado com sucesso",
          atualizado_de: id_cliente,
          atualizado_para: novo_id_cliente
        }));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 405));
    }
  });


module.exports = {
  clientesIdClienteFavoritosIdVeiculoClientePUT,
  clientesIdClienteFavoritosIdVeiculoDELETE,
  clientesIdClienteFavoritosIdVeiculoPUT,
  favoritosGET,
  favoritosPOST
};
