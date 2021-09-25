import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegDayPageRoutingModule } from './leg-day-routing.module';

import { LegDayPage } from './leg-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegDayPageRoutingModule
  ],
  declarations: [LegDayPage]
})
export class LegDayPageModule {}
