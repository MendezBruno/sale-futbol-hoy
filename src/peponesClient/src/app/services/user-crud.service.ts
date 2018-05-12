import { Injectable } from '@angular/core';
import { Http, URLSearchParams} from '@angular/http';
import { Observable , throwError} from 'rxjs';
import { User } from '../models/user';
import { map, catchError, finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserCrudService {


  userUrl = 'http://localhost:3000/api/v1/user/';
  creacion = 'http://localhost:3000/signup/';
  usuarios = 'users';

  constructor(private http: Http) { }

  signup(user): Observable<User> {
    console.log(this.formatSingup(user));
    return this.http
            .post(this.creacion, this.formatSingup(user))
            .pipe(
              map( res => res.json()),
              catchError(this.handleError),
            );
  }

   private formatSingup(user) {
    const body = new URLSearchParams();
    body.set('email', user.email);
    body.set('password', user.password);
    body.set('datos', JSON.stringify(user.datos));
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

  modifyUser(user: User): Observable<User> {
    return this.http.put(this.userUrl + user._id, this.formatSingup(user))
                    .pipe(
                      map( res => res.json()),
                      catchError(this.handleError)
    );

  }
  deleteUser(user: any): any {
    return this.http.delete(this.userUrl + user._id)
                    .pipe( catchError(this.handleError) );
  }
  getUser(id: any): Observable<User> {
    return this.http
            .get(this.userUrl + id)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }
  getAllUsers(): Observable<User[]> {
    return this.http
            .get(this.userUrl)
            .pipe(
              map( res => res.json()),
              catchError(this.handleError)
            );
  }

  addUser(user: User): Observable<User> {
    return this.signup(user)
               .pipe(
                map(res => res),
                catchError(this.handleError)
              );
  }

}
