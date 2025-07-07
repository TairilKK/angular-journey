import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../shared/card/card';
import { type TTask } from './task.model';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TTask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
