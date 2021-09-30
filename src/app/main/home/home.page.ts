import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/models/training.model';
import { User } from 'src/app/models/user.model';
import { DataStorageService } from 'src/app/services/data-storage.service';

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
      favorite: 'star-outline',
    },
    {
      name: 'Six Pack Training',
      pageUrl: '/six-pack',
      iconPath: './assets/icon/training.png',
      favorite: 'star-outline',
    },
    {
      name: 'Grip Strength Training',
      pageUrl: '/grip-strength',
      iconPath: './assets/icon/training.png',
      favorite: 'star-outline',
    },
    {
      name: 'Leg Day Training',
      pageUrl: '/leg-day',
      iconPath: './assets/icon/training.png',
      favorite: 'star-outline',
    },
  ];

  constructor(
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    this.name = user.name;
  }

  onFavorite(index: number) {
    let favoriteItem = this.trainingPages[index];

    switch (favoriteItem.favorite) {
      case 'star-outline':
        favoriteItem.favorite = 'star';
        break;
      case 'star':
        favoriteItem.favorite = 'star-outline';
        break;
      default:
        console.log('Error');
    }

    this.dataStorage.putFavorites(this.trainingPages).subscribe((resData) => {
      console.log(resData);
    });
  }
}
