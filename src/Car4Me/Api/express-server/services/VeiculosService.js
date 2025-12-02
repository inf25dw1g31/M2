/* eslint-disable no-unused-vars */
const Service = require('./Service');
const sql = require('../utils/db');

/**
 * ============================
 *   LISTAR VEÍCULOS
 * ============================
 */
const veiculosGET = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const estado = params?.estado;
      const marca = params?.marca;
      const id_categoria = params?.id_categoria;

      let query = `
        SELECT 
          v.*,
          c.nome AS categoria,
          c.preco_dia,

          -- Carro tem reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
          ) > 0 AS tem_reserva,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_reserva

        FROM veiculos v
        LEFT JOIN categorias c ON c.id_categoria = v.id_categoria
        WHERE 1=1
      `;

      const conditions = [];
      const values = [];

      // =============================
      // FILTROS PROTEGIDOS
      // =============================

      if (estado && estado.trim() !== "") {
        conditions.push("v.estado = ?");
        values.push(estado.trim());
      }

      if (marca && marca.trim() !== "") {
        conditions.push("v.marca = ?");
        values.push(marca.trim());
      }

      if (id_categoria && id_categoria !== "" && !isNaN(id_categoria)) {
        conditions.push("v.id_categoria = ?");
        values.push(Number(id_categoria));
      }


      sql.query(query, values, (err, result) => {
        if (err) {
          console.error("SQL ERROR:", err);
          return reject(Service.rejectResponse(err.sqlMessage, 500));
        }

        resolve(Service.successResponse(result));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });



/**
 * ============================
 *   CRIAR VEÍCULO
 * ============================
 */
const veiculosPOST = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const v = params?.body;

      if (!v || !v.marca || !v.modelo || !v.matricula || !v.ano) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        INSERT INTO veiculos 
        (marca, modelo, matricula, ano, cor, quilometragem, estado, id_categoria)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [
        v.marca,
        v.modelo,
        v.matricula.trim().toUpperCase(),
        v.ano,
        v.cor || null,
        v.quilometragem || 0,
        v.estado || "Disponivel",
        v.id_categoria || null
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        resolve(Service.successResponse({
          id_veiculo: result.insertId,
          ...v
        }));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });




/**
 * ============================
 *   OBTER VEÍCULO POR ID
 * ============================
 */
const veiculosIdGET = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const vid = Number(id);
      if (!Number.isInteger(vid) || vid <= 0) {
        return reject(Service.rejectResponse("ID inválido", 400));
      }

      const query = `
        SELECT 
          v.*,
          c.nome AS categoria,
          c.preco_dia,

          -- Tem reservas
          (
            SELECT COUNT(*)
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
          ) > 0 AS tem_reserva,

          -- Estado da última reserva
          (
            SELECT estado
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS estado_reserva,

          -- ID da última reserva
          (
            SELECT r.id_reserva
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
            ORDER BY r.data_inicio DESC
            LIMIT 1
          ) AS id_reserva,

          -- Lista de IDs de todas as reservas associadas
          (
            SELECT JSON_ARRAYAGG(r.id_reserva)
            FROM reservas r
            WHERE r.id_veiculo = v.id_veiculo
          ) AS reservas_ids,

          -- Tem manutenção
          (
            SELECT COUNT(*)
            FROM manutencoes m
            WHERE m.id_veiculo = v.id_veiculo
          ) > 0 AS tem_manutencao,

          -- ID da última manutenção
          (
            SELECT m.id_manutencao
            FROM manutencoes m
            WHERE m.id_veiculo = v.id_veiculo
            ORDER BY m.data_manutencao DESC
            LIMIT 1
          ) AS id_manutencao,

          -- Lista de IDs de todas as manutenções associadas
          (
            SELECT JSON_ARRAYAGG(m.id_manutencao)
            FROM manutencoes m
            WHERE m.id_veiculo = v.id_veiculo
          ) AS manutencoes_ids

        FROM veiculos v
        LEFT JOIN categorias c ON c.id_categoria = v.id_categoria
        WHERE v.id_veiculo = ?
      `;

      sql.query(query, [vid], (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        if (result.length === 0) {
          return reject(Service.rejectResponse("Veículo não encontrado", 404));
        }

        resolve(Service.successResponse(result[0]));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });



/**
 * ============================
 *   ATUALIZAR VEÍCULO
 * ============================
 */
const veiculosIdPUT = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const id = params.id;
      const v = params?.body;

      if (!v || !v.marca || !v.modelo || !v.matricula || !v.ano) {
        return reject(Service.rejectResponse("Dados obrigatórios em falta", 400));
      }

      const query = `
        UPDATE veiculos SET
          marca = ?, 
          modelo = ?, 
          matricula = ?, 
          ano = ?, 
          cor = ?, 
          quilometragem = ?, 
          estado = ?, 
          id_categoria = ?
        WHERE id_veiculo = ?
      `;

      const values = [
        v.marca,
        v.modelo,
        v.matricula.trim().toUpperCase(),
        v.ano,
        v.cor || null,
        v.quilometragem || 0,
        v.estado || "Disponivel",
        v.id_categoria || null,
        id
      ];

      sql.query(query, values, (err, result) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 400));

        if (result.affectedRows === 0)
          return reject(Service.rejectResponse("Veículo não encontrado", 404));

        resolve(Service.successResponse({
          id_veiculo: id,
          ...v
        }));
      });

    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });



/**
 * ============================
 *   APAGAR VEÍCULO
 * ============================
 */
const veiculosIdDELETE = ({ id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const sqlReservas = `
        SELECT estado 
        FROM reservas 
        WHERE id_veiculo = ?
      `;

      sql.query(sqlReservas, [id], (err, reservas) => {
        if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

        const estadosBloqueados = ["ativa", "cancelada"]; // ← removido "alugado"

        const temReservaBloqueada = reservas.some(r =>
          estadosBloqueados.includes(r.estado)
        );

        if (temReservaBloqueada) {
          sql.query(
            "INSERT INTO logs_veiculos_delete (id_veiculo, motivo) VALUES (?, ?)",
            [id, "Tentativa de apagar veículo com reservas em estado bloqueante"],
            () => {}
          );

          return reject(
            Service.rejectResponse(
              "Não é possível apagar: o veículo possui reservas ativas ou canceladas.",
              400
            )
          );
        }

        // Verificar manutenções
        sql.query(
          "SELECT id_manutencao FROM manutencoes WHERE id_veiculo = ?",
          [id],
          (err, manutencoes) => {
            if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

            if (manutencoes.length > 0) {
              sql.query(
                "INSERT INTO logs_veiculos_delete (id_veiculo, motivo) VALUES (?, ?)",
                [id, "Tentativa de apagar veículo com manutenções associadas"],
                () => {}
              );

              return reject(
                Service.rejectResponse(
                  "Não é possível apagar: o veículo possui manutenções registadas.",
                  400
                )
              );
            }

            // Se passou tudo → apagar veículo
            sql.query(
              "DELETE FROM veiculos WHERE id_veiculo = ?",
              [id],
              (err, result) => {
                if (err) return reject(Service.rejectResponse(err.sqlMessage, 500));

                if (result.affectedRows === 0)
                  return reject(
                    Service.rejectResponse("Veículo não encontrado", 404)
                  );

                resolve(
                  Service.successResponse({
                    message:
                      "Veículo removido com sucesso (não possui manutenções ou reservas bloqueantes)"
                  })
                );
              }
            );
          }
        );
      });
    } catch (e) {
      reject(Service.rejectResponse(e.message, 500));
    }
  });


module.exports = {
  veiculosGET,
  veiculosPOST,
  veiculosIdGET,
  veiculosIdPUT,
  veiculosIdDELETE,
};
