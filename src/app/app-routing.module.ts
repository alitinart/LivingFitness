import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'biceps',
    loadChildren: () => import('./training/biceps/biceps.module').then( m => m.BicepsPageModule)
  },
  {
    path: 'leg-day',
    loadChildren: () => import('./training/leg-day/leg-day.module').then( m => m.LegDayPageModule)
  },
  {
    path: 'six-pack',
    loadChildren: () => import('./training/six-pack/six-pack.module').then( m => m.SixPackPageModule)
  },
  {
    path: 'grip-strength',
    loadChildren: () => import('./training/grip-strength/grip-strength.module').then( m => m.GripStrengthPageModule)
  },
  {
    path: 'meals',
    loadChildren: () => import('./meals/meals.module').then( m => m.MealsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
