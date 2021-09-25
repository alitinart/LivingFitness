import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six-pack',
  templateUrl: './six-pack.page.html',
  styleUrls: ['./six-pack.page.scss'],
})
export class SixPackPage implements OnInit {
  maxTime = 30;
  timer;
  started = false;
  text = 'Start doing jumping jacks for 30 seconds';
  paused = false;
  currentTime = 0;
  imagePath = './assets/icon/JumpingJacks.png';

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
          this.maxTime = 60;
          this.text = 'Now do 10 pushups for at least 1 minute.';
          this.imagePath = './assets/icon/Pushups.png';
        } else {
          this.maxTime = 60;
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
