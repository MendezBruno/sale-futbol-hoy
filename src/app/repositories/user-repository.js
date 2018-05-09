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
    let User = await User.findById(id).exec();

    for (let prop in body) {
        User[prop] = body[prop]
    }
    return User.save()
};

exports.deleteUser = async function (id) {
    return User.findByIdAndRemove(id).exec()
};
