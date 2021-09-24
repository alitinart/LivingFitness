import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  name = '';

  constructor(private router: Router) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    this.name = user.name;
  }
}
