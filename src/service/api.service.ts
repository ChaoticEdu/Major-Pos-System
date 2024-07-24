import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/api/';


  constructor(private http: HttpClient) {



  }

  test_Post(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}menu/upload`, data);
  }

  login(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}user/login`,data)
  }

  registration(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}user/registration`,data)

  }
  getUser(restaurant_id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}user/${restaurant_id}`)

  }
  getUserById(restaurant_id:any,user_id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}user/${restaurant_id}/${user_id}`)

  }


  getMenu(restaurant_id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}menu/${restaurant_id}`)

  }
  postOrder(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}order/upload`,data)

  }
  getOrder(restaurant_id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}order/${restaurant_id}`)

  }

  getOrderoftables(restaurant_id:any,table_name:any):Observable<any>{
   
    return this.http.get(`${this.apiUrl}order/${restaurant_id}/${table_name}`)

  }

}
