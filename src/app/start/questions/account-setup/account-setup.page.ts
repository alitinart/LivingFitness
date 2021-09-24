import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.page.html',
  styleUrls: ['./account-setup.page.scss'],
})
export class AccountSetupPage implements OnInit {
  email = '';
  password = '';
  passwordVerification = '';

  constructor(
    private dataStorage: DataStorageService,
    private router: Router
  ) {}

  onContinue() {
    if (this.password === this.passwordVerification) {
      this.dataStorage.password.next(this.password);
      this.dataStorage.email.next(this.email);
      this.dataStorage.saveUser();
      this.router.navigate(['/home']);
    } else {
      alert('Passwords do not match');
    }
  }

  ngOnInit() {}
}
