import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = 'http://localhost:3000/api/v1/login';

  constructor(private http: Http) { }

  login(email, password): Observable<User> {
   return this.http.post(this.loginURL, this.formatLogin(email, password))
                   .pipe(
                          map( res => res.json()),
                          catchError(this.handleError)
                        );
                    // catch(this.handleError);
                  // );
  }


  private formatLogin(email, password) {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return body;
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    console.log(error);
    return Observable.throw(error.message ? error.message : error.toString());
  }

  // Guarda el permiso del usuario actual
  setLoggedUser(user): void {
    console.log('Login correcto');
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Cancela el permiso de administrador global
  cancelUserLogin(): void {
    sessionStorage.removeItem('currentUser');
  }

  // Devuelve el usuario logueado
  getLoggedUser(): User {
    return (JSON.parse(sessionStorage.getItem('currentUser')) as User);
  }

  // Chequeo si hay alguien logueado
  isLogged(): boolean {
    return sessionStorage.getItem('currentUser') !== null;
  }

  // Devuelve si el usuario logueado es admin.
  // tslint:disable-next-line:typedef-whitespace
  isAdmin(): boolean {
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return  user !== null && user.role === 'Administrador';
  }



}
