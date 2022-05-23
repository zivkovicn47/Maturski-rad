import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodtypeService {
  baseUrl = "https://localhost:5001/api/Foodtype";
  constructor(private http: HttpClient) { }

  getFoodtype() {
    return this.http.get(this.baseUrl);
  }

  addFoodtype(Foodtype: any) {
    return this.http.post(this.baseUrl, Foodtype);
  }

  editFoodtype(id: number, Foodtype: any) {
    return this.http.post(this.baseUrl + '/' + id, Foodtype);
  }

  deleteFoodtype(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
