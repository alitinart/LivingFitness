import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicepsPage } from './biceps.page';

const routes: Routes = [
  {
    path: '',
    component: BicepsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicepsPageRoutingModule {}
