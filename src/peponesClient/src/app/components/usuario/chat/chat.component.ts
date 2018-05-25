import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message;
  messages: string[] = [];

  constructor(private socketService: SocketService) { }

  sendMessage() {

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
