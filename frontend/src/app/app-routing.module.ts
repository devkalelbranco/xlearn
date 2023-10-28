import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/loggedin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoggedInGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
