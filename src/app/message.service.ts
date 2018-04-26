import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  add(messages: string) {

    this.messages.push(messages);
    setTimeout(() => { this.clear(); }, 5000);// get message into 5s

  }
  clear() {
    this.messages = [];
  }
  constructor() {

   }

}

