const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const JugadorSchema = new Schema({
    user_id: { 
        type: Schema.Types.ObjectId,
        ref: 'User'
     },

    datos_jugador: {
        apodo: String,
        posicion: String,
        habilidad: Number,
        asistencia: String
    },
    datos_estadistica: {
        goles: Number,
        partidos: Number
    }
});

// create the model for user and expose it to our app
module.exports = Mongoose.model('Jugador', JugadorSchema);
