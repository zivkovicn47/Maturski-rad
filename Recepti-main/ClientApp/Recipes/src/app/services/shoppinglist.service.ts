import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  baseUrl = "https://localhost:5001/api/Shoppinglist";
  constructor(private http: HttpClient) { }

  getShoppinglist() {
    return this.http.get(this.baseUrl);
  }

  addShoppinglist(Shoppinglist: any) {
    return this.http.post(this.baseUrl, Shoppinglist);
  }

  editShoppinglist(id: number, Shoppinglist: any) {
    return this.http.post(this.baseUrl + '/' + id, Shoppinglist);
  }

  deleteShoppinglist(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
