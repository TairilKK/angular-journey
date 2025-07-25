import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Card } from '../../shared/card/card';
import { TasksService } from '../tasks.service';
import { type TTask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TTask;

  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
