'use strict';

/**
 * Repository for Node administration.
 */

const Partido = require('../models/partido');

// TODO MANEJAR ERRORES

exports.getPartidos = async function () {
    return Partido.find()
};

exports.getPartidoById = async function (id) {
    return Partido.findById(id)
};

exports.getPartidoByFecha = async function (fecha) {
    let query = {
        fecha: fecha
    };
    return Partido.findOne(query)
};

exports.createPartido = async function (body) {
    return new Partido({
        datos_partido: {
            fecha: Date,
            estadio: String
        }
    }).save()
};

exports.savePartido = async function (id, body) {
    let Partido = await Partido.findById(id).exec();

    for (let prop in body) {
        Partido[prop] = body[prop]
    }
    return Partido.save()
};

exports.deletePartido = async function (id) {
    return Partido.findByIdAndRemove(id).exec()
};
