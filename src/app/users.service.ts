import { Injectable } from "@angular/core";
import { User } from "./share/user.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  users: User[] = [
    { name: "test 1", email: "test@test.com", password: "123456aA" },
    { name: "test 2", email: "test@test.com", password: "123456aA" },
    { name: "test 3", email: "test@test.com", password: "123456aA" },
  ];
  usersChanged = new Subject<User[]>();

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    return this.users[id];
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users);
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    this.usersChanged.next(this.users);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users);
  }
}
