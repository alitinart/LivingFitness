import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SixPackPage } from './six-pack.page';

const routes: Routes = [
  {
    path: '',
    component: SixPackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixPackPageRoutingModule {}
