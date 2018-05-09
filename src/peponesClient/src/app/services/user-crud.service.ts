import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable , throwError} from 'rxjs';
import { User } from '../models/user';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserCrudService {


  loginURL = 'http://localhost:3000/api/v1/';
  creacion = 'http://localhost:3000/signup/';
  usuarios = 'users';

  constructor(private http: Http) { }

  signup(email, password): Observable<User> {
    let body = new URLSearchParams();
     body.set('email', email);
     body.set('password', password);
     let optionsArgs: RequestOptionsArgs = { withCredentials: true }
    let options = new RequestOptions(optionsArgs);
    console.log(this.formatSingup(email, password));
    return this.http
            .post(this.creacion, body, options)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }

   private formatSingup(email, password) {
     let body = new URLSearchParams();
     body.set('email', email);
     body.set('password', password);
     console.log(body);
     return body;
   }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    console.log(error);
    return throwError(error.message ? error.message : error.toString());
  }

  modifyUser(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  deleteUser(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  getUser(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  getAllUsers(): Observable<User[]> {
    return this.http
            .get(this.loginURL + this.usuarios)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }
  addUser(user: User): Observable<User> {
    return this.signup(user.email, user.password);
  }

}
