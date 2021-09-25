import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  name = '';

  trainingPages: Training[] = [
    {
      name: 'Biceps Training',
      pageUrl: '/biceps',
      iconPath: './assets/icon/training.png',
    },
    {
      name: 'Six Pack Training',
      pageUrl: '/six-pack',
      iconPath: './assets/icon/training.png',
    },
    {
      name: 'Grip Strength Training',
      pageUrl: '/grip-strength',
      iconPath: './assets/icon/training.png',
    },
    {
      name: 'Leg Day Training',
      pageUrl: '/leg-day',
      iconPath: './assets/icon/training.png',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    this.name = user.name;
  }
}
