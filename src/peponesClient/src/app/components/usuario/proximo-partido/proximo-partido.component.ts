import { Component, OnInit } from '@angular/core';
import { PartidoCrudService } from '../../../services/partido-crud.service';
import { Partido } from '../../../models/partidos';
import { map } from 'rxjs/operators';
import { Jugador } from '../../../models/jugador';
import { User } from '../../../models/user';
import { JugadorCrudService } from '../../../services/jugador-crud.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-proximo-partido',
  templateUrl: './proximo-partido.component.html',
  styleUrls: ['./proximo-partido.component.css']
})
export class ProximoPartidoComponent implements OnInit {

  partido: Partido;
  jugador: Jugador;
  user: User;
  inscripto = false;

  constructor(private partidoService: PartidoCrudService, private jugadorService: JugadorCrudService, private loginSErvice: LoginService) {

    this.partidoService.getAllPartidos( ).subscribe(

        (partidos: Partido[]) => this.partido = partidos[partidos.length - 1]);

    if (this.loginSErvice.isLogged()) {
      this.user = this.loginSErvice.getLoggedUser();
      this.jugadorService.getJugador(this.user._id).pipe(
        map( jugador => this.jugador = jugador )
      );
    }



   }

  ngOnInit() {
   // this.inscripto = this.estoyInscripto();

  }

  inscribirse() {
    this.partido.datos_partido.jugadores.push(this.jugador);
    this.partidoService.modifyPartido(this.partido).subscribe(
      partido => this.partido = partido
    );
    this.inscripto = true;
  }

  estoyInscripto(): boolean {
    return this.partido.datos_partido.jugadores.find( jugador => jugador._id === this.jugador._id ) != null ;
  }

}
