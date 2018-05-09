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
        datos_jugador: {
            posicion: body.posicion,
            asistencia: body.asistencia,
            habilidad: body.habilidad
        },
    }).save()
};

exports.saveJugador = async function (id, body) {
    let jugador = await Jugador.findById(id).exec();

    for (let prop in body) {
        jugador[prop] = body[prop]
    }
    return jugador.save()
};

exports.deleteJugador = async function (id) {
    return Jugador.findByIdAndRemove(id).exec()
};
