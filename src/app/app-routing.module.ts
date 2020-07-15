import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedUserGuard} from './core/guards/logged-user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule),
    canLoad: [LoggedUserGuard],
    canActivate: [LoggedUserGuard],
    canActivateChild: [LoggedUserGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)

  },
  {
    path: 'flights',
    loadChildren: () => import('./modules/flights/flights.module').then(mod => mod.FlightsModule),
  },
  {
    path: 'hotels',
    loadChildren: () => import('./modules/hotels/hotels.module').then(mod => mod.HotelsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
