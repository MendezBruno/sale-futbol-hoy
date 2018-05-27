import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../../models/jugador';
import { Posicion } from '../../../models/posiciones';
import { User } from '../../../models/user';
import { UserCrudService } from '../../../services/user-crud.service';
import { JugadorCrudService } from '../../../services/jugador-crud.service';
import { PartidoCrudService } from '../../../services/partido-crud.service';

@Component({
  selector: 'app-admin-jugador',
  templateUrl: './admin-jugador.component.html',
  styleUrls: ['./admin-jugador.component.css']
})
export class AdminJugadorComponent implements OnInit {


  model: any = {};
  user: User;
  usuarios: User[];
  jugadores: Jugador[];
  jugador: Jugador;
  infoJugador: boolean;
  batata: any;

  constructor(
     private userService: UserCrudService,
     private jugadorService: JugadorCrudService) {

    this.usuarios = [];
    this.jugadores = [];
    this.infoJugador = false;
    this.jugador = undefined;
    this.userService.getAllUsers().subscribe(
      users => {this.usuarios = users; this.user = this.getFirstOrUndefined(this.usuarios); });

    this.jugadorService.getAllJugadores().subscribe(
      jugadores => {this.jugadores = jugadores; console.log(jugadores); }
    );



  }

  posiciones = Posicion;
    keys(): Array<string> {
        const keys = Object.keys(this.posiciones);
        return keys;
    }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      console.log('Presiona Enter');
    }
  }

  saveJugador(jugador: Jugador) {

    console.log(this.jugador);
    console.log(jugador);

    this.jugadorService.addJugador(jugador).subscribe(
      resJugador => this.jugadores.push(resJugador)
   );

  }

  updateJugador(jugador: Jugador) {
    this.jugadorService.updateJugador(jugador).subscribe(
      resJugador => jugador = resJugador
    );
  //  this.jugadorService.getAllJugadores().subscribe(
  //    jugadores => this.jugadores = jugadores
  //  );
  }

  selectUser(usuario: User) {
    this.jugador = this.jugadores.find( jugador => jugador.user_id === usuario._id);
    this.user = usuario;
  }

  crearJugador() {
    this.jugador = new Jugador();
  }

  getFirstOrUndefined(lista: any): User {
    return lista[0] ? lista[0] : undefined;
  }

}
