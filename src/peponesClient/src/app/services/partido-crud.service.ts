import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { Partido } from '../models/partidos';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PartidoCrudService {

  partidoUrl = 'http://localhost:3000/api/v1/partido/';

  constructor(private http: Http) {
  }


  getAllPartidos(): Observable<Partido[]> {
    return this.http
            .get(this.partidoUrl)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }


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



  private formatPartido(partido: Partido) {
    const body = new URLSearchParams();
    body.set('datos_partido', JSON.stringify(partido.datos_partido));
    body.set('datos_equipo_uno',  JSON.stringify(partido.datos_equipo_uno));
    body.set('datos_equipo_dos', JSON.stringify(partido.datos_equipo_dos));
    console.log(body);
    return body;
   }

   private handleError (error: Response | any) {
    console.log(error);
    return throwError(error.message ? error.message : error.toString());
  }
}
