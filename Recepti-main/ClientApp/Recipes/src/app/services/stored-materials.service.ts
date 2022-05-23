import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoredMaterialsService {
  baseUrl = "https://localhost:5001/api/StoredMaterials";
  constructor(private http: HttpClient) { }

  getStoredMaterials() {
    return this.http.get(this.baseUrl);
  }

  addStoredMaterials(StoredMaterials: any) {
    return this.http.post(this.baseUrl, StoredMaterials);
  }

  editStoredMaterials(id: number, StoredMaterials: any) {
    return this.http.post(this.baseUrl + '/' + id, StoredMaterials);
  }

  deleteStoredMaterials(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
