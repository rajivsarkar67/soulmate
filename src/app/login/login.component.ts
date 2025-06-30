import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isOtpSent: boolean = false;

  // there will be a payment page, only after successful payment, the user can login
  // need to make that system

  constructor(private router: Router, private dataService: DataService){}

  sendOTP(phone: number){
    if(phone<6000000000 || phone>9999999999){
      alert('Phone number should be valid');
    }else{  
      this.isOtpSent = true;
    }
  }

  goToEvaluation(phone: number, otp: number){
    console.log('goToEvaluation called');
    this.dataService.doesUserExist(phone).subscribe((res: any) => {
      console.log(res);
      this.dataService.currentUser = res.find((elem: any) => +elem.phone === phone);
      if(this.dataService.currentUser){   // if user exists in the db, then login
        localStorage.setItem('currentUser', JSON.stringify(this.dataService.currentUser));
        this.router.navigate(['evaluation', this.dataService.currentUser.currentQuestion]);
      }
      else{   // if user doesn't exists in the db
        alert("user doesn't exists in the db");
      }

    });
  }

  // get Api call to check whether the phone number exists in the database
  // for now, if it exists, only then transfer the user to the evaluation page.
  // take reference of the currentQuestion for that particular user
  // later, we will transfer new user to the evaluation page, but after creating his entry in the db

}
