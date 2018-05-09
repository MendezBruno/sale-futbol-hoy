import { Component, OnInit } from '@angular/core';
import { AdminUsersComponent } from '../../admin/admin-users/admin-users.component';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  model: AdminUsersComponent;
  constructor() { }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      console.log('Presiona Enter');
    }
  }

}
