import { Posicion } from './posiciones';

export class Jugador {
    _id: string;
    user_id: string;
    datos_jugador: {
        apodo: string,
        posicion: Posicion,
        habilidad: Number,
        asistencia: string
    };
    datos_estadistica: {
        goles: Number,
        partidos: Number
    };
}
