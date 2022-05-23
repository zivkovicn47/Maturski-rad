import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsedRecipesService {
  baseUrl = "https://localhost:5001/api/usedrecipes";
  constructor(private http: HttpClient) { }

  getUsedRecipes() {
    return this.http.get(this.baseUrl);
  }

  addUsedRecipes(UsedRecipes: any) {
    return this.http.post(this.baseUrl, UsedRecipes);
  }

  editUsedRecipes(id: number, UsedRecipes: any) {
    return this.http.post(this.baseUrl + '/' + id, UsedRecipes);
  }

  deleteUsedRecipes(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
