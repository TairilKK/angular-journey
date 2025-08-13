import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  userName = '';
  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName =
          this.userService.users.find(
            (user) => user.id === paramMap.get('userId')
          )?.name || '';
      },
    });
  }
}
