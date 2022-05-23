import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  baseUrl = "https://localhost:5001/api/Foods";
  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get(this.baseUrl);
  }

  addFood(food: any) {
    return this.http.post(this.baseUrl, food);
  }

  editFood(id: number, food: any) {
    return this.http.post(this.baseUrl + '/' + id, food);
  }

  deleteFood(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
