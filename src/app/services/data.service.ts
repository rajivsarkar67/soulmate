import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any;

  constructor(private http: HttpClient) { }

  doesUserExist(phone: number){
    return this.http.get('http://localhost:3000/users');
  }
}
