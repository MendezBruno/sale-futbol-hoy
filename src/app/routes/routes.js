'use strict';

/**
 * API routes.
 */
const Usuarios = require('./usuario');
const Jugador = require('./jugador');
const Partido = require('./partido');

/**
 * Assign the routes for the API.
 */
exports.assignRoutes = function (app) {
  app.use('/api/v1/partido', Partido);
  app.use('/api/v1/jugador', Jugador);
  app.use('/api/v1/user', Usuarios);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
      let err = new Error('Not Found');
    err.status = 404;
    next(err)
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    next(err)
  })
};
