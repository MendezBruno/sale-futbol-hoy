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
    let partido = new Partido();
    partido.datos_partido = JSON.parse(body.datos_partido);
    partido.save();
    return partido;
};

exports.savePartido = async function (id, body) {
    let findPartido = await Partido.findById(id).exec();
// ACA HAY QUE MODIFICAR
    let datos_partido = JSON.parse(body.datos_partido);
    let datos_equipo_uno = JSON.parse(body.datos_equipo_uno); 
    let datos_equipo_dos = JSON.parse(body.datos_equipo_dos); 

    for (let prop in datos_partido) {
        findPartido.datos_partido[prop] = datos_partido[prop]
    }
    for (let prop in datos_equipo_uno) {
        findPartido.datos_equipo_uno[prop] = datos_equipo_uno[prop]
    }
    for (let prop in datos_equipo_dos) {
        findPartido.datos_equipo_dos[prop] = datos_equipo_dos[prop]
    }
    
    return findPartido.save()
};

exports.deletePartido = async function (id) {
    return Partido.findByIdAndRemove(id).exec()
};
