import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadorCrudService {

  jugadorUrl = 'http://localhost:3000/api/v1/jugador/';

  constructor(private http: Http) { }

  getAllJugadores(): Observable<Jugador[]> {
    return this.http
    .get(this.jugadorUrl)
    .pipe(
      map( res => res.json()),
      catchError(this.handleError)
    );
  }

  addJugador(jugador: Jugador): Observable<Jugador> {
    return this.http
            .post(this.jugadorUrl, this.formatJugador(jugador))
            .pipe(
              map( res => res.json()),
              catchError(this.handleError),
            );
  }

  private formatJugador(jugador: Jugador) {
    const body = new URLSearchParams();
    body.set('user_id', jugador.user_id);
    body.set('datos_jugador', JSON.stringify(jugador.datos_jugador) );
    body.set('datos_estadistica', JSON.stringify(jugador.datos_estadistica));
    console.log(body);
    return body;
   }

  updateJugador(jugador: Jugador): any {
    return this.http.put(this.jugadorUrl + jugador._id, this.formatJugador(jugador))
                    .pipe(
                      map( res => res.json()),
                      catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    console.log(error);
    return throwError(error.message ? error.message : error.toString());
  }
}
