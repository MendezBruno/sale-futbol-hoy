'use strict';

/**
 * Repository for Node administration.
 */

const Jugador = require('../models/jugador');

// TODO MANEJAR ERRORES

exports.getJugadores = async function () {
    return Jugador.find()
};

exports.getJugadorById = async function (id) {
    return Jugador.findById(id)
};

exports.getJugadorByName = async function (name) {
    let query = {
        name: name
    };
    return Jugador.findOne(query)
};

exports.createJugador = async function (body) {
    return new Jugador({
        user_id: body.user_id,
        datos_jugador: JSON.parse(body.datos_jugador),
        datos_estadistica: JSON.parse(body.datos_estadistica)
    }).save()
};

exports.saveJugador = async function (id, body) {
    let findJugador = await Jugador.findById(id).exec();
    // TODO mejorar esta asignacion.
    let datos_jugador= JSON.parse(req.body.datos_jugador);
    let datos_estadistica = JSON.parse(req.body.datos_estadistica);
    for (let prop in datos_jugador) {
        findJugador.datos_jugador[prop] = datos_jugador[prop]
    }
    for (let prop in datos_estadistica) {
        findJugador.datos_estadistica[prop] = datos_estadistica[prop]
    }
    return findJugador.save()
};

exports.deleteJugador = async function (id) {
    return Jugador.findByIdAndRemove(id).exec()
};
