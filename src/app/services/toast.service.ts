import { Injectable } from '@angular/core';
import { Message } from '../interfaces/message';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ToastService {

  private messages = new BehaviorSubject<Message[]>([]);
  id: number = 0;
  messages$: Observable<Message[]> = this.messages.asObservable();

  

  constructor() { }



  

  sendMessage(message: Message): void {
    this.messages.next([...this.messages.value, message]);
    this.id++;
    setTimeout(() => {
      this.dismiss(message.id); // Assuming you have a $key property to identify messages
    }, 4000);

  }

  getMessages(): Message[] {
    return this.messages.value;
  }

  dismiss(messageId: number): void {
    const updatedMessages = this.messages.value.filter(msg => msg.id !== messageId);
    this.messages.next(updatedMessages); 
  }
  getCurrentId(): number {
    return this.id;
  }

  
}
