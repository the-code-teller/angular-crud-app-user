import { Component } from '@angular/core';
import { UserService } from "./services/user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularf';

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  users: any;
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }
  
  getUserById(inp: any) {    
    this.userService.getUser(inp).subscribe((data) => {
      this.users = [data];
    })
  }

  addUser(data: any) {
    this.userService.addUser(data).subscribe((result) => {
      this.getUsers();
    })
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user).subscribe((result) => {
      this.getUsers();
    })
  }

  updateUser(user: any) {
    this.userService.updateUser(user).subscribe((result) => {
      this.getUsers();
    })
  }
}
