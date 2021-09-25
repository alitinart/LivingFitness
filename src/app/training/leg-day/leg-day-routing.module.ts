import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegDayPage } from './leg-day.page';

const routes: Routes = [
  {
    path: '',
    component: LegDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegDayPageRoutingModule {}
