import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherMaintenanceComponent } from './teacher-maintenance.component';
import { XComponentsModule } from '../../x-components/x-components.module';
import { TeacherMaintenanceRoutingModule } from './teacher-maintenance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherMaintenanceService } from './teacher-maintenance.service';
import { BrowserModule } from '@angular/platform-browser';
import { XToasterService } from 'src/app/x-services/x-toaster/XToaster.service';


@NgModule({
  declarations: [
    TeacherMaintenanceComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TeacherMaintenanceRoutingModule,
    XComponentsModule
  ],
  providers: [
    TeacherMaintenanceService,
    XToasterService
  ]
})
export class TeacherMaintenanceModule { }
