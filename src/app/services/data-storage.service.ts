import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public name = new BehaviorSubject<string>(null);
  public lastname = new BehaviorSubject<string>(null);
  public email = new BehaviorSubject<string>(null);
  public password = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {}

  saveUser() {
    const user = {
      name: this.name.getValue(),
      lastname: this.lastname.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
    };

    localStorage.setItem('user', JSON.stringify(user));
  }

  fetchMeals() {
    return this.http.get('http://localhost:8081/meals');
  }

  putFavorites(body: Training[]) {
    return this.http.post('http://localhost:8081/favorites', body);
  }

  fetchFavorites() {
    return this.http.get('http://localhost:8081/favorites');
  }
}
