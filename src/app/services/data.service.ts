import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  doesUserExist(phone: number){
    console.log('doesUserExist of service called');
    return this.http.get('http://localhost:3000/users');
  }
}
