'use strict';

/**
 * Repository for Node administration.
 */

const User = require('../models/user');

// TODO MANEJAR ERRORES

exports.getUsers = async function () {
    return User.find()
};

exports.getUserById = async function (id) {
    return User.findById(id)
};

exports.getUserByName = async function (name) {
    let query = {
        name: name
    };
    return User.findOne(query)
};

exports.saveUser = async function (id, body) {
    let findUser = await User.findById(id).exec();
    let datos = JSON.parse(body.datos);
    findUser["email"] = body["email"];
    findUser["password"] = body["password"];

    for (let prop in datos) {
        findUser.datos[prop] = datos[prop]
    }
    return findUser.save()
};

exports.deleteUser = async function (id) {
    return User.findByIdAndRemove(id).exec()
};
