import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any;
  questionsSignal = signal(null);
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) { }

  doesUserExist(phone: number){
    return this.http.get(`http://localhost:3000/users/${phone}`);
  }

  getAllQuestions(){
    this.http.get('http://localhost:3000/questions').subscribe((res: any) => {
      this.questionsSignal.set(res);
    });
  }

  showLoader(){
    this.isLoading.next(true);
  }

  hideLoader(){
    this.isLoading.next(false);
  }
}
