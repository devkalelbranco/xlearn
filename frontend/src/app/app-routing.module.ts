import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/loggedin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./pages/home-logged/home-logged.module').then(m => m.HomeLoggedModule), canActivate: [LoggedInGuard] },
  { path: 'teacherMaintenance', loadChildren: () => import('./pages/teacher-maintenance/teacher-maintenance.module').then(m => m.TeacherMaintenanceModule), canActivate: [LoggedInGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [LoggedInGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
