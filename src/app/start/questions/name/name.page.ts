import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  name = '';
  lastname = '';

  constructor(
    private dataStorage: DataStorageService,
    private router: Router
  ) {}

  onContinue() {
    this.dataStorage.name.next(this.name);
    this.dataStorage.lastname.next(this.lastname);
    this.router.navigate(['/start/account-setup']);
  }

  ngOnInit() {}
}
