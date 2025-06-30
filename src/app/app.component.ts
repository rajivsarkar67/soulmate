import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'yourSoulmate';

  constructor(public dataService: DataService){}
  ngOnInit(){
    if(localStorage.getItem('currentUser')){
      this.dataService.currentUser = JSON.parse(localStorage.getItem('currentUser') as string);
    }
  }

}
