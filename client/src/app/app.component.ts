import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import User from '../models/user';
import UserService from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
