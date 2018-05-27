'use strict';

// TODO MANEJAR ERRORES

/**
 * Urls associated with role resource.
 */
const Express = require('express');
const Router = Express.Router();
const PartidoRepository = require('../repositories/partido-repository');

/**
 * GET Partidoss.
 */
Router.get('/', async function (req, res, next) {
    let Partidos = await PartidoRepository.getPartidos();
    res.json(Partidos)
});

/**
 * GET a Partidos by id.
 */
Router.get('/:fecha', async function (req, res, next) {
    // TODO que pasa si el Partidos no esta?
    let Partido = await PartidoRepository.getPartidoByFecha(req.params.id);
    res.json(Partido)
});

/**
 * POST Partidoss.
 */
Router.post('/', async function (req, res, next) {
    let newPartido = await PartidoRepository.createPartido(req.body);
    res.status(201);
    res.location(req.baseUrl + req.path + newPartido.id);
    res.json(newPartido)
});

/**
 * PATCH Partidos.
 */
Router.put('/:id', async function (req, res, next) {
    let Partido = await PartidoRepository.savePartido(req.params.id, req.body);
    res.json(Partido)
});

/**
 * DELETE Partido.
 */
Router.delete('/:id', async function (req, res, next) {
    let Partido = await PartidoRepository.deletePartido(req.params.id);
    res.json(Partido)
});

module.exports = Router;