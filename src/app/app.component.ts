import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PomodoroClock';
  break: number = 5;
  session: number = 25;
  work: boolean = true;
  isRunning: boolean = false;
  timer: any = 25;

  breakHandler(param: number) {
    if(param === 1 && this.break <= 24) this.break += 1
    if(param === 0 && this.break >= 2) this.break -= 1
  } 

  sessionHandler(param: number) {
    if(param === 1 && this.session <= 59) this.session += 1
    if(param === 0 && this.session >= 16) this.session -= 1
  }

  reset() {
    this.break = 5;
    this.session = 25;
  }
  
  timerHandler() {
    if(!this.isRunning){
      this.timerStart()
    } else {
      this.timerStop()
    }
  } 
      
      timerStart() {
        this.isRunning = true;
        this.timer = setInterval(() => this.timer = this.timer - 1, 1000)
      }

      timerStop() {
        this.isRunning = false;
        clearInterval(this.timer)
      }
}
  
  

