import { Datos } from './datos';

export class User {
    public _id: string;
    public email: string;
    public password: string;
    public datos: Datos;

    constructor() {
      this.datos = new Datos();
    }
  }
