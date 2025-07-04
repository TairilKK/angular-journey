import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  onSelectUser(id: string) {
    console.log('Selected user with id: ' + id);
  }
}
