import { Component, computed } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService){}

  questionId : number = 0;
  idSubscription: any;
  selectedOption: any;
  questions: any;

  ngOnInit(){
    this.idSubscription = this.route.paramMap.subscribe(params => {
      this.questionId = Number(params.get('id'));
      // if(this.dataService.currentUser[])
      this.dataService.getAllQuestions();
      //creating a computed signal for storing questions
      this.questions = computed(() => {
        return this.dataService.questionsSignal();
      })
    })
  }

  goToNextQuestion(){

    if(!this.selectedOption){
      alert('Please select an option to move ahead');
      return;
    }

    // saving the answer to the backend
    this.dataService.saveAnswer(this.dataService.currentUser.phone, this.questionId, this.selectedOption).subscribe(res => {
      this.dataService.currentUser = res;
      localStorage.setItem('currentUser', JSON.stringify(this.dataService.currentUser));
      this.router.navigate(['evaluation', this.questionId+1]);
    });
  }

  ngOnDestroy(){
    this.idSubscription.unsubscribe();
  }

}