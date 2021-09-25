import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixPackPageRoutingModule } from './six-pack-routing.module';

import { SixPackPage } from './six-pack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SixPackPageRoutingModule
  ],
  declarations: [SixPackPage]
})
export class SixPackPageModule {}
