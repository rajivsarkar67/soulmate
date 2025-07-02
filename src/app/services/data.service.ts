import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser: any;
  questionsSignal = signal(null);
  isLoading = signal(false);

  constructor(private http: HttpClient) { }

  // to get the data of particular user
  doesUserExist(phone: number){
    return this.http.get(`http://localhost:3000/users/${phone}`);
  }

  // to get all questions list
  getAllQuestions(){
    this.http.get('http://localhost:3000/questions').subscribe((res: any) => {
      this.questionsSignal.set(res);
    });
  }

  // to save the answer for a question for particular user
  saveAnswer(phoneNumber: number, questionId: number, selectedOption: string){
    return this.http.post(`http://localhost:3000/save`, {phoneNumber, questionId, selectedOption});
  }

}
