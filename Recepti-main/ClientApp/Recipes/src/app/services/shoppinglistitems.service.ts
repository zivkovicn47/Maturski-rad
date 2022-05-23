import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistitemsService {
  baseUrl = "https://localhost:5001/api/shoppinglistitems";
  constructor(private http: HttpClient) { }

  getShoppinglistitems() {
    return this.http.get(this.baseUrl);
  }

  addShoppinglistitems(Shoppinglistitems: any) {
    return this.http.post(this.baseUrl, Shoppinglistitems);
  }

  editShoppinglistitems(id: number, Shoppinglistitems: any) {
    return this.http.post(this.baseUrl + '/' + id, Shoppinglistitems);
  }

  deleteShoppinglistitems(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
