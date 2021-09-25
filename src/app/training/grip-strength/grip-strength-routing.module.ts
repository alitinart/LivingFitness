import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GripStrengthPage } from './grip-strength.page';

const routes: Routes = [
  {
    path: '',
    component: GripStrengthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GripStrengthPageRoutingModule {}
