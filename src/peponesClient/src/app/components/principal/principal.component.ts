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

  constructor(private socketService: SocketService) { }


  sendMessage() {

    this.username = sessionStorage.getItem('user');
    this.socketService.sendMessage(this.message);
    this.message = '';

  }

  ngOnInit() {
    this.socketService.getMessages().subscribe(message => {
    console.log('dasd' + message);
    this.messages.push(message);
    // console.log('ChatComponent Initialized '+this.messages+' y los mensajes');
    });
  }

}
