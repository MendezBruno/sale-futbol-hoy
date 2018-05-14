import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogComponent } from '../../dialogs/commonDialogs/confirmationDialog/confirmationDialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { UserCrudService } from '../../../services/user-crud.service';
import { User } from '../../../models/user';
import { UserModalComponent } from '../../dialogs/user-modal/user-modal.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  title = 'Crear o Modificar';
  roles = ['Administrador', 'Jugador', 'DT'];
  user: User;
  submitted: boolean;
  active = true;
  selectedUser: User;
  users: User[] = [];
  errorMessage: string;
  isCreation: boolean;
  modal: MatDialogRef<UserModalComponent>;
  confirmationDialog: MatDialogRef<ConfirmationDialogComponent>;
  querySearch: String;

  constructor( private userCrudService: UserCrudService , public dialog: MatDialog) {
      this.user = new User();
  }

  ngOnInit() {
    this.getAllUsers();
  }


  newUser() {
    this.user = new User();
    this.active = false;
    this.isCreation = false;
    setTimeout(() => this.active = true, 0);
  }

  /* METODOS DEL MODAL */
  saveUser(user: User) {
    if (this.isCreation) {
      this.addUser(user);
    } else {
      this.saveChanges(user);
    }
  }

  // Abre el modal para el login
  openDialog(user): void {
    this.user = user;

    this.modal = this.dialog.open(UserModalComponent);

    this.modal.componentInstance.model = this;

    this.modal.afterClosed().subscribe(result => {
      this.resetDialogValues();
    });
  }

  // Resetea los valores de los campos
  resetDialogValues(): void {
    this.user = new User();
    this.errorMessage = '';
  }

  /* CREACION */
  addUser(user): void {
    this.userCrudService.addUser(user).subscribe(
                    resUser => this.users.push(resUser),
                    error => this.errorMessage = <any>error);

  }

  /* OBTENCION */
  getAllUsers(): void {
    this.userCrudService.getAllUsers().subscribe(
                       (users) => {
                          this.users = users;
                          console.log(users); },
                       error =>  this.errorMessage = <any>error);
  }

  getUser(id): void {
    this.userCrudService.getUser(id).subscribe(
                       user => this.selectedUser = user,
                       error =>  this.errorMessage = <any>error);
  }

  /* ELIMINACION */
  deleteUser(user): void {
    this.userCrudService.deleteUser(user._id).subscribe(
            deletedUser => this.getAllUsers(),
            error =>  this.errorMessage = <any>error);
   // this.getAllUsers();
  }

  /* MODIFICACION */
  saveChanges(user: User): void {
    this.userCrudService.modifyUser(user).subscribe(
                       (userRes) => { this.user = userRes; },
                      (error) => { this.errorMessage = <any>error; });
  }

  // Comienza a crear un usuario
  createNewUser(): void {
    this.isCreation = true;
    this.openDialog(new User());
  }

  // Comienza la edicion de usuario
  editUser(user): void {
      this.isCreation = false;
      user.password = '';
      this.openDialog(user);
  }

  identify(index, user) {
      return index;
  }

  /* CONFIRMATION */
  confirmDelete(user): void {
    this.confirmationDialog = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false
    });

    this.confirmationDialog.componentInstance.confirmMessage = 'Seguro que quiere borrar el usuario de ' + user.name;

    this.confirmationDialog.afterClosed().subscribe(result => {

      this.deleteUser(user);

      this.confirmationDialog = null;
    });
  }

  getUserColor(user): String {
    if (user.role === 'Administrador') {
      return 'primary';
    } else {
      return 'warn';
    }
  }


}



