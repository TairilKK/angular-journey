import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Header } from './header/header';
import { SharedModule } from './shared/shared.module';
import { NewTask } from './tasks/new-task/new-task';
import { Task } from './tasks/task/task';
import { Tasks } from './tasks/tasks';
import { User } from './user/user';

@NgModule({
  declarations: [App, Header, Task, Tasks, NewTask, User],
  bootstrap: [App],
  imports: [BrowserModule, FormsModule, SharedModule],
})
export class AppModule {}
