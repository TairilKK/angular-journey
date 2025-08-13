import { Routes } from '@angular/router';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: [
      {
        path: 'tasks',
        component: TaskComponent,
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
      },
    ],
  },
];
