import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get("https://dummyjson.com/products?limit=100");
  }
  
  getSinglePost(id:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}

