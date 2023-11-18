import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLoggedRoutingModule } from './home-logged-routing.module';
import { HomeLoggedComponent } from './home-logged.component';
import { XComponentsModule } from '../../x-components/x-components.module';


@NgModule({
  declarations: [
    HomeLoggedComponent
  ],
  imports: [
    CommonModule,
    HomeLoggedRoutingModule,
    XComponentsModule
  ]
})
export class HomeLoggedModule { }
