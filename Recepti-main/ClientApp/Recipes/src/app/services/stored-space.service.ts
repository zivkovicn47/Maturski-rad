import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoredSpaceService {
  baseUrl = "https://localhost:5001/api/StorageSpaces";
  constructor(private http: HttpClient) { }

  getStoredSpace() {
    return this.http.get(this.baseUrl);
  }

  addStoredSpace(storedSpace: any) {
    return this.http.post(this.baseUrl, storedSpace);
  }

  editStoredSpace(id : number, food: any) {
    return this.http.post(this.baseUrl + '/' + id, food);
  }

  deleteStoredSpace(id : number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
