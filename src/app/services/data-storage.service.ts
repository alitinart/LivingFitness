import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public name = new BehaviorSubject<string>(null);
  public lastname = new BehaviorSubject<string>(null);
  public email = new BehaviorSubject<string>(null);
  public password = new BehaviorSubject<string>(null);

  constructor() {}

  saveUser() {
    const user = {
      name: this.name.getValue(),
      lastname: this.lastname.getValue(),
      email: this.email.getValue(),
      password: this.password.getValue(),
    };

    localStorage.setItem('user', JSON.stringify(user));
  }
}
