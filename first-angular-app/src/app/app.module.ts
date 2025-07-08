import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Card } from './shared/card/card';
import { NewTask } from './tasks/new-task/new-task';
import { Task } from './tasks/task/task';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@NgModule({
  declarations: [App, Header, Task, Tasks, NewTask, User, Card],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
