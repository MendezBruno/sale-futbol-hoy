import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  isLogIn = false;
  username: string;
  userpicture: string;
  // todo agregar el numero de compras que hay en el carro.

  constructor() {
  }

  ngOnInit() {
  }

  isLoggedIn() {
  }

  logout() {
  }

  getUserName( ) {
  }

  goTo() {
  }
}

