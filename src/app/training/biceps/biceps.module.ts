import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicepsPageRoutingModule } from './biceps-routing.module';

import { BicepsPage } from './biceps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicepsPageRoutingModule
  ],
  declarations: [BicepsPage]
})
export class BicepsPageModule {}
