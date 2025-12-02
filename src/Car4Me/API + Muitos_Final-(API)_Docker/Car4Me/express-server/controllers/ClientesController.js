/**
 * The ClientesController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ClientesService');
const clientesGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesGET);
};

const clientesIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdDELETE);
};

const clientesIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdGET);
};

const clientesIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdPUT);
};

const clientesPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesPOST);
};


module.exports = {
  clientesGET,
  clientesIdDELETE,
  clientesIdGET,
  clientesIdPUT,
  clientesPOST,
};
