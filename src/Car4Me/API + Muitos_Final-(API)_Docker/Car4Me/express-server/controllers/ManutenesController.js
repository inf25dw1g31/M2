/**
 * The ManutenesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ManutenesService');
const manutencoesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.manutencoesGET);
};

const manutencoesIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.manutencoesIdDELETE);
};

const manutencoesIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.manutencoesIdGET);
};

const manutencoesIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.manutencoesIdPUT);
};

const manutencoesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.manutencoesPOST);
};


module.exports = {
  manutencoesGET,
  manutencoesIdDELETE,
  manutencoesIdGET,
  manutencoesIdPUT,
  manutencoesPOST,
};
