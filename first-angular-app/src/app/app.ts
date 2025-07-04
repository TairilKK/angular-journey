import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { Header } from './header/header';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
