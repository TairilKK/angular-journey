import { Component, Input } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
