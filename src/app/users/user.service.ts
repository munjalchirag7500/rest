import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL='http://localhost:3000/api/'
  constructor(private http:HttpClient) { }


  getFood(cat){
    console.log(cat);
    
    return this.http.get(`${this.URL}getFood/${cat}`);
  }
}
