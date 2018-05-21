import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    private url = 'http://localhost:3001';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendMessage(message) {
        this.socket.emit('new_message', message);
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            console.log('estoy dentro del servicio, dentro del returnn');
            this.socket.on('new_message', (message) => {
                observer.next(message);
            });
        });
    }


    // public getMessages(message){
    //  return this.socket.on('new_message',message);

    // }
}
