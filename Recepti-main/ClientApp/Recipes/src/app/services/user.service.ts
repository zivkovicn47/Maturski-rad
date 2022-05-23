import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "https://localhost:5001/api/User";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(this.baseUrl);
  }

  addUser(User: any) {
    return this.http.post(this.baseUrl, User);
  }

  editUser(id: number, User: any) {
    return this.http.post(this.baseUrl + '/' + id, User);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
