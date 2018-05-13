import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../../models/jugador';
import { Posicion } from '../../../models/posiciones';
import { User } from '../../../models/user';
import { UserCrudService } from '../../../services/user-crud.service';
import { JugadorCrudService } from '../../../services/jugador-crud.service';

@Component({
  selector: 'app-admin-jugador',
  templateUrl: './admin-jugador.component.html',
  styleUrls: ['./admin-jugador.component.css']
})
export class AdminJugadorComponent implements OnInit {

  userName: string;
  usuarios: User[];
  jugadores: Jugador[];
  jugador: Jugador;
  posiciones: Posicion;
  infoJugador: boolean;

  constructor(private userService: UserCrudService, private jugadorService: JugadorCrudService ) {
    this.usuarios = [];
    this.jugadores = [];
    this.infoJugador = false;
    this.jugador = undefined;
    this.userName = undefined;
    this.userService.getAllUsers().subscribe(
      users => this.usuarios = users
    );
    this.jugadorService.getAllJugadores().subscribe(
      jugadores => this.jugadores = jugadores
    );

  }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      console.log('Presiona Enter');
    }
  }

  saveJugador(jugador: Jugador) {
    this.jugadorService.addJugador(jugador).subscribe(
      resJugador => this.jugadores.push(resJugador)
    );
  //  this.jugadorService.getAllJugadores().subscribe(
  //    jugadores => this.jugadores = jugadores
  //  );
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
    this.userName = usuario.datos.name.toString();
  }

  crearJugador() {
    this.jugador = new Jugador();
  }

}
