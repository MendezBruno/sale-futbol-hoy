import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { User } from '../../../models/user';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  providers: [LoginService]
})
export class LoginDialogComponent implements OnInit {

  model: User;
  errorMessage: string;

   constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private loginService: LoginService) {
     this.model = new User();
     dialogRef.disableClose = true;
   }

    // Detecta el enter para el login
    keyDownFunction(event) {
      if (event.keyCode === 13) {
        this.login();
      }
    }

    login() {
     this.loginService.login(this.model.email, this.model.password).subscribe(
      user => {
        this.loginService.setLoggedUser(user);
        this.dialogRef.close(true);
      },
      error => this.loginFailed(error));
    }

    // Cuando el login falla, muestra el mensaje en el modal del login
    loginFailed(errorMessage): void {
      this.errorMessage = errorMessage;
    }



    ngOnInit() {
    }

}
