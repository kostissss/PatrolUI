import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
 
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),/*canActivate: [authGuardGuard]*/ }, 
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: '', redirectTo: '/home', pathMatch: 'full',/*canActivate: [authGuardGuard]*/ }, // Default route
 { path: ':id', redirectTo: '/login', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
