import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any;
  public questionsSignal = signal(null);

  constructor(private http: HttpClient) { }

  doesUserExist(phone: number){
    return this.http.get('http://localhost:3000/users');
  }

  getAllQuestions(){
    this.http.get('http://localhost:3000/questions').subscribe((res: any) => {
      this.questionsSignal.set(res);
    });
  }
}
