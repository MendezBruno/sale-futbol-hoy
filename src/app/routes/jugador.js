'use strict';

// TODO MANEJAR ERRORES

/**
 * Urls associated with role resource.
 */
const Express = require('express');
const Router = Express.Router();
const JugadorRepository = require('../repositories/jugador-repository');

/**
 * GET Jugadorss.
 */
Router.get('/', async function (req, res, next) {
    let Jugadores = await JugadorRepository.getJugadores();
    res.json(Jugadores)
});

/**
 * GET a Jugadors by id.
 */
Router.get('/:name', async function (req, res, next) {
    // TODO que pasa si el Jugadors no esta?
    let Jugador = await JugadorRepository.getJugadorByName(req.params.id);
    res.json(Jugador)
});

/**
 * POST Jugadorss.
 */
Router.post('/', async function (req, res, next) {
    let newJugador = await JugadorRepository.createJugador(req.body);
    res.status(201);
    res.location(req.baseUrl + req.path + newJugador.id);
    res.json(newJugador)
});

/**
 * PATCH Jugadors.
 */
Router.patch('/:id', async function (req, res, next) {
    let jugador = await JugadorRepository.saveJugador(req.params.id, req.body);
    res.json(jugador)
});

/**
 * DELETE Jugadors.
 */
Router.delete('/:id', async function (req, res, next) {
    let jugador = await JugadorRepository.deleteJugador(req.params.id);
    res.json(jugador)
});

module.exports = Router;