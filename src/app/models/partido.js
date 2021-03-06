const mongoose = require('mongoose');
var Jugador = mongoose.model('Jugador');
const Schema = mongoose.Schema;


const PartidoSchema = new mongoose.Schema({
    datos_partido: {
        fecha: Date,
        estadio: String,
        jugadores: [{
            type: Schema.Types.ObjectId,
            ref: 'Jugador'
        }]
    },
    
    datos_equipo_uno: {
        goles: String,
        jugador_id: [{
            type: Schema.Types.ObjectId,
            ref: 'Jugador'
        }],
        dt: {
            type: Schema.Types.ObjectId,
            ref: 'Jugador'
        }
    },
    datos_equipo_dos: {
        goles: String,
        jugador_id: [{
            type: Schema.Types.ObjectId,
            ref: 'Jugador'
        }]
    }
});

// create the model for user and expose it to our app
module.exports = mongoose.model('Partido', PartidoSchema);
