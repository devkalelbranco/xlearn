import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMaintenanceComponent } from './teacher-maintenance.component';

const routes: Routes = [{ path: '', component: TeacherMaintenanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherMaintenanceRoutingModule { }
