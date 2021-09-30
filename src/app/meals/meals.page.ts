import { Component, OnInit } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Meals } from '../models/meals.model';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.page.html',
  styleUrls: ['./meals.page.scss'],
})
export class MealsPage implements OnInit {
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  currentTime = new Date();

  isBreakfast = false;
  isLunch = false;
  isDinner = false;

  constructor(private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.dataStorage.fetchMeals().subscribe((resData: Meals) => {
      this.breakfast = resData.breakfast;
      this.lunch = resData.lunch;
      this.dinner = resData.dinner;
    });
    console.log(this.currentTime.getHours());
    if (this.currentTime.getHours() < 12) {
      this.isBreakfast = true;
      this.isLunch = false;
      this.isDinner = false;
    } else if (
      this.currentTime.getHours() < 18 &&
      this.currentTime.getHours() > 12
    ) {
      this.isBreakfast = false;
      this.isLunch = true;
      this.isDinner = false;
    } else {
      this.isBreakfast = false;
      this.isLunch = false;
      this.isDinner = true;
    }
  }
}
