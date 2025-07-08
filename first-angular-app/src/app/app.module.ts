import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { Task } from './tasks/task/task';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@NgModule({
  declarations: [App],
  bootstrap: [App],
  imports: [BrowserModule, Header, Task, Tasks, User],
})
export class AppModule {}
