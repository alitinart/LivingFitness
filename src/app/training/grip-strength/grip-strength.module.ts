import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GripStrengthPageRoutingModule } from './grip-strength-routing.module';

import { GripStrengthPage } from './grip-strength.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GripStrengthPageRoutingModule
  ],
  declarations: [GripStrengthPage]
})
export class GripStrengthPageModule {}
