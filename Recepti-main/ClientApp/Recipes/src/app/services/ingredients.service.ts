import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  baseUrl = "https://localhost:5001/api/ingredients";
  constructor(private http: HttpClient) { }

  getIngredients() {
    return this.http.get(this.baseUrl);
  }

  addIngredients(Ingredients: any) {
    return this.http.post(this.baseUrl, Ingredients);
  }

  editIngredients(id: number, Ingredients: any) {
    return this.http.post(this.baseUrl + '/' + id, Ingredients);
  }

  deleteIngredients(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
