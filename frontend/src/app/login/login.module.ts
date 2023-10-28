import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { XComponentsModule } from '../x-components/x-components.module';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { XToasterService } from '../x-services/x-toaster/XToaster.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    XComponentsModule,
    HttpClientModule
  ],
  providers: [    
    LoginService,
    XToasterService
  ]
})
export class LoginModule { }
