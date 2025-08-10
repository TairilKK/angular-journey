import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
function singal<T>(arg0: never[]) {
  throw new Error('Function not implemented.');
}
