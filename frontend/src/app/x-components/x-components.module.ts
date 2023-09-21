import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XInputComponent } from './x-input/x-input.component';
import { XPasswordComponent } from './x-password/x-password.component';
import { XButtonComponent } from './x-button/x-button.component';



@NgModule({
  declarations: [
    XInputComponent,
    XPasswordComponent,
    XButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    XInputComponent,
    XPasswordComponent,
    XButtonComponent
  ]
})
export class XComponentsModule { }
