import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(model) {
    console.log(model);
    this.loginService.login(model.userName, model.password).subscribe(
      (user) => {
        this.loginService.setLoggedUser(user);
        this.gotoPrincipalPageUser();
        console.log(user);
      });
  }

  gotoPrincipalPageUser(): any {
    this.router.navigate(['/user']);
  }

}
