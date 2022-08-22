import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8080/users";
  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(this.url);
  }
  url1: any;
  getUser(data: any) {
    this.url1 = this.url + "/" + data.id;
    return this.http.get(this.url1);
  }

  addUser(data: any) {  
    return this.http.post(this.url, data);
  }
  deleteUser(user: any) {   
    this.url1 = this.url + "/" + user.id;         
    return this.http.delete(this.url1);
  }
  updateUser(user: any) {
    this.url1 = this.url + "/" + user.id;
    return this.http.put(this.url1, user);
  }
}
