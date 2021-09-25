import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leg-day',
  templateUrl: './leg-day.page.html',
  styleUrls: ['./leg-day.page.scss'],
})
export class LegDayPage implements OnInit {
  maxTime = 10;
  timer;
  started = false;
  text = 'Lay flat and grab the weight';
  paused = false;
  currentTime = 0;

  constructor() {}

  onStart() {
    this.started = true;
    this.paused = false;

    this.timer = setTimeout((x) => {
      if (this.maxTime <= 0) {
      }
      this.maxTime -= 1;

      if (this.maxTime > 0) {
        this.started = true;
        this.onStart();
      } else {
        if (this.paused === false) {
          this.started = false;
          this.maxTime = 30;
          this.text = 'Now do 10 reps, each rep lasting 3 seconds inbetween';
        } else {
          this.maxTime = 30;
        }
      }
    }, 1000);
  }

  onPause() {
    this.paused = true;
    this.currentTime = this.maxTime;
    this.maxTime = 0;
  }

  onUnPause() {
    this.maxTime = this.currentTime;
    this.started = true;
    this.paused = false;
    this.onStart();
  }

  ngOnInit() {}
}
