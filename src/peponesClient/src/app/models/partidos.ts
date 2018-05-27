import { Equipo } from './equipo';
import { Jugador } from './jugador';

export class Partido {
    public _id: string;
    datos_partido: DatosPartido;
    datos_equipo_uno: Equipo;
    datos_equipo_dos: Equipo;

    constructor() {
      this.datos_equipo_uno = new Equipo();
      this.datos_equipo_dos = new Equipo();
      this.datos_partido = new DatosPartido();
    }
  }

  class DatosPartido {
    fecha: Date;
    estadio: String;
    jugadores: Jugador[];
}
