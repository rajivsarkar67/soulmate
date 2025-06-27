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
      this.dataService.getAllQuestions();
      //creating a computed signal for storing questions
      this.questions = computed(() => {
        return this.dataService.questionsSignal();
      })
      this.selectedOption = this.questions[this.questionId] === 'A' || this.questions[this.questionId] === 'B' || this.questions[this.questionId] === 'C' ? this.questions[this.questionId] : null;
      console.log(this.selectedOption);
    })
  }

  goToQuestion(id: number){
    this.router.navigate(['evaluation', id]);
    this.ngOnInit();
  }

  goToNextQuestion(){
    if(!this.selectedOption){
      alert('Please select an option to move ahead');
      return;
    }
    // save the answer of the current question
    this.dataService.currentUser[this.questionId] = this.selectedOption;
    // first we will check if the next question is disabled or not
    // if it is disabled, call an api to enable it
    // then, irrespective of disabled or enabled, navigate to the question
    this.dataService.currentUser[this.questionId+1] = true;
    this.router.navigate(['evaluation', this.questionId+1]);
    console.log(this.dataService.currentUser);
  }

  ngOnDestroy(){
    this.idSubscription.unsubscribe();
  }

}