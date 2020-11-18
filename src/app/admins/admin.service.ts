import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL='http://localhost:3000/admins/api/'
  constructor(private http:HttpClient) { }


  addFood(data){
    return this.http.post(`${this.URL}addFood`,data)
  }
}
