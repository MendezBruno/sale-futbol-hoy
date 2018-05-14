import { Posicion } from './posiciones';

export class Jugador {
    public _id: string;
    public user_id: string;
    public datos_jugador: DatosJugador;
    public datos_estadistica: DatosEstadistica;

    constructor() {
        this.datos_jugador = new DatosJugador();
        this.datos_estadistica = new DatosEstadistica();
    }
}

class DatosJugador {
    apodo: string;
    posicion: Posicion;
    habilidad: Number;
    asistencia: string;
}

class DatosEstadistica {
    goles: Number;
    partidos: Number;
}
