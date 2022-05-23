import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  baseUrl = "https://localhost:5001/api/recipes";
  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.baseUrl);
  }

  addRecipes(Recipes: any) {
    return this.http.post(this.baseUrl, Recipes);
  }

  editRecipes(id: number, Recipes: any) {
    return this.http.post(this.baseUrl + '/' + id, Recipes);
  }

  deleteRecipes(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
