import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { Tasks } from './tasks';

@NgModule({
  declarations: [Task, Tasks, NewTask],
  exports: [Tasks],
  imports: [SharedModule, FormsModule, CommonModule],
})
export class TasksModule {}
