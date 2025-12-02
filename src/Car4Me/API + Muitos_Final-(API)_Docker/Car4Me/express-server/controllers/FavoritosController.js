/**
 * The FavoritosController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/FavoritosService');
const clientesIdClienteFavoritosIdVeiculoClientePUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdClienteFavoritosIdVeiculoClientePUT);
};

const clientesIdClienteFavoritosIdVeiculoDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdClienteFavoritosIdVeiculoDELETE);
};

const clientesIdClienteFavoritosIdVeiculoPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.clientesIdClienteFavoritosIdVeiculoPUT);
};

const favoritosGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.favoritosGET);
};

const favoritosPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.favoritosPOST);
};


module.exports = {
  clientesIdClienteFavoritosIdVeiculoClientePUT,
  clientesIdClienteFavoritosIdVeiculoDELETE,
  clientesIdClienteFavoritosIdVeiculoPUT,
  favoritosGET,
  favoritosPOST,
};
