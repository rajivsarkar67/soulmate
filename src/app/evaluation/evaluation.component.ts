import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})
export class EvaluationComponent {

  questions = [
    {id:1, question: 'How do you prefer to spend your weekends?', optionA: 'Exploring new places or outdoor activities', optionB: 'Relaxing at home with a book or movie', optionC: 'Socializing with friends and family'},
    {id:2, question: 'What is your approach to solving conflicts?', optionA: 'Directly address the issue and discuss it', optionB: 'Take some time to cool off before talking', optionC: 'Avoid confrontation and hope it resolves itself'},
    {id:3, question: 'What role does your career play in your life?', optionA: 'It is my top priority and a big part of my identity', optionB: 'It is important, but I value a balanced life', optionC: 'It is just a means to an end; my personal life comes first'},
    {id:4, question: 'How do you usually handle stress?', optionA: 'I exercise or engage in physical activities', optionB: 'I talk to someone or seek support', optionC: 'I keep it to myself and try to push through'},
    {id:5, question: 'What are your views on financial planning?', optionA: 'I am meticulous about saving and budgeting', optionB: 'I have a general plan but do not stress over details', optionC: 'I tend to live in the moment and don’t worry much about it'},
    {id:6, question: 'How important is travelling to you?', optionA: 'It is a passion, I love exploring new places', optionB: 'I enjoy it occasionally but do not prioritize it', optionC: 'I prefer staying close to home and familiar surroundings'},
    {id:7, question: 'What kind of social life do you prefer?', optionA: 'I love being surrounded by people and making new friends', optionB: 'I enjoy small gatherings with close friends', optionC: 'I prefer spending time alone or with just one or two people'},
    {id:8, question: 'How do you approach decision-making?', optionA: 'I analyze all options carefully before deciding', optionB: 'I go with my gut feeling', optionC: 'I tend to ask others for their opinions before deciding'},
    {id:9, question: 'What is your preferred way to show affection?', optionA: 'Physical touch, like hugs or holding hands', optionB: 'Verbal expressions, like saying "I love you"', optionC: 'Acts of service, like doing something thoughtful for them'},
    {id:10, question: 'How do you view long-term relationships?', optionA: 'They require continuous effort and communication', optionB: 'They should feel natural and not require much effort', optionC: 'They are about shared experiences and growth together'},
  ]

}
