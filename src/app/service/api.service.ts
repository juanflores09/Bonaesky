import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { 
    console.log("Servicio api")
  }

  getProduct(){
    return this.http.get<any>("http://fakestoreapi.com/products")
  }
}
