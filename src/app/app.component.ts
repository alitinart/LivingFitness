import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  email = '';

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Meals', url: '/start', icon: 'pizza' },
    { title: 'Favorite Workouts', url: '/folder/Favorites', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.router.navigate(['/home']);
      this.email = user.email;
    } else {
      this.router.navigate(['/start']);
    }
  }
}
