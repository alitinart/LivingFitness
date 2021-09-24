import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  },
  {
    path: 'name',
    loadChildren: () => import('./questions/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'account-setup',
    loadChildren: () => import('./questions/account-setup/account-setup.module').then( m => m.AccountSetupPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartPageRoutingModule {}
