import { Component, OnInit } from '@angular/core';
import { AdminUsersComponent } from '../../admin/admin-users/admin-users.component';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  model: any = {};
  constructor() {  }

  ngOnInit() {
  //  this.model.user = new User();
    console.log(this.model);
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      console.log('Presiona Enter');
    }
  }

}
