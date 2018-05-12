'use strict';

// TODO MANEJAR ERRORES

/**
 * Urls associated with role resource.
 */
const Express = require('express');
const Router = Express.Router();
const UserRepository = require('../repositories/user-repository');

/**
 * GET Users.
 */
Router.get('/', async function (req, res, next) {
    let User = await UserRepository.getUsers();
    res.json(User)
});

/**
 * GET a User by id.
 */
Router.get('/:id', async function (req, res, next) {
    // TODO que pasa si el User no esta?
    let User = await UserRepository.getUserById(req.params.id);
    res.json(User)
});

/**
 * PATCH Users.
 */
Router.put('/:id', async function (req, res, next) {
    let User = await UserRepository.saveUser(req.params.id, req.body);
    res.json(User)
});

/**
 * DELETE User.
 */
Router.delete('/:id', async function (req, res, next) {
    let User = await UserRepository.deleteUser(req.params.id);
    res.json(User)
});

module.exports = Router;