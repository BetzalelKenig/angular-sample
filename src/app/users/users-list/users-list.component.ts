import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/share/user.model';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

}
