/**
 * The VeiculosController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/VeiculosService');
const veiculosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.veiculosGET);
};

const veiculosIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.veiculosIdDELETE);
};

const veiculosIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.veiculosIdGET);
};

const veiculosIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.veiculosIdPUT);
};

const veiculosPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.veiculosPOST);
};


module.exports = {
  veiculosGET,
  veiculosIdDELETE,
  veiculosIdGET,
  veiculosIdPUT,
  veiculosPOST,
};
