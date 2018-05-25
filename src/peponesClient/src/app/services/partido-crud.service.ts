import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Partido } from '../models/partidos';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PartidoCrudService {

  partidoUrl = 'http://localhost:3000/api/v1/partido/';

  constructor(private http: Http) { }


  addPartido(partido): Observable<Partido> {
    return this.http
            .post(this.partidoUrl, this.formatPartido(partido))
            .pipe(
              map( res => res.json()),
              catchError(this.handleError),
            );
  }

  modifyPartido(partido: Partido): Observable<Partido> {
    return this.http.put(this.partidoUrl + partido._id, this.formatPartido(partido))
                    .pipe(
                      map( res => res.json()),
                      catchError(this.handleError)
    );
  }

  deletePartido(id: string): any {
    return this.http.delete(this.partidoUrl + id)
                    .pipe( catchError(this.handleError) );
  }
  getPartido(id: any): Observable<Partido> {
    return this.http
            .get(this.partidoUrl + id)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }
  getAllPartidos(): Observable<Partido[]> {
    return this.http
            .get(this.partidoUrl)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }



  private formatPartido(partido) {
    const body = new URLSearchParams();
    body.set('fecha', partido.fecha);
    body.set('estadio', partido.estadio);
    body.set('jugadores', partido.jugadores);
    console.log(body);
    return body;
   }

   private handleError (error: Response | any) {
    console.log(error);
    return throwError(error.message ? error.message : error.toString());
  }
}
