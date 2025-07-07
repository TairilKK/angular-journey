import { Component, Input } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { NewTaskData } from './task/task.model';

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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build REST API',
      summary: 'Create a RESTful API using Node.js and Express.',
      dueDate: '2025-11-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Write Unit Tests',
      summary: 'Write unit tests for all Angular components and services.',
      dueDate: '2025-10-10',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Design Database',
      summary: 'Design a relational database schema for the project.',
      dueDate: '2025-09-20',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Deploy Application',
      summary: 'Deploy the Angular application to the cloud.',
      dueDate: '2025-08-30',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Optimize Performance',
      summary: 'Improve the performance of the Angular app.',
      dueDate: '2025-07-25',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Update Documentation',
      summary: 'Update the project documentation and README files.',
      dueDate: '2025-12-01',
    },
    {
      id: 't8',
      userId: 'u2',
      title: 'Refactor Codebase',
      summary: 'Refactor the codebase for better maintainability.',
      dueDate: '2025-11-05',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Implement Authentication',
      summary: 'Add authentication and authorization features.',
      dueDate: '2025-10-18',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Fix Bugs',
      summary: 'Fix all critical bugs reported by QA.',
      dueDate: '2025-09-28',
    },
    {
      id: 't11',
      userId: 'u5',
      title: 'Setup CI/CD',
      summary: 'Setup continuous integration and deployment pipelines.',
      dueDate: '2025-08-15',
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Conduct Code Review',
      summary: 'Review code submitted by team members.',
      dueDate: '2025-07-30',
    },
  ];

  onAddTask(taskData: NewTaskData) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId == this.userId);
  }
}
