import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public data: any = [];
  message: string;
  messages: string[] = [];
  public username;

  constructor() { }


  sendMessage() {


  }

  ngOnInit() {

  }

}
