/**
 * The ReservasController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ReservasService');
const reservasGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.reservasGET);
};

const reservasIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.reservasIdDELETE);
};

const reservasIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.reservasIdGET);
};

const reservasIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.reservasIdPUT);
};

const reservasPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.reservasPOST);
};


module.exports = {
  reservasGET,
  reservasIdDELETE,
  reservasIdGET,
  reservasIdPUT,
  reservasPOST,
};
