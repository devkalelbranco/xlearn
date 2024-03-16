import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appTeacherMaintenance]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TeacherMaintenanceDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class TeacherMaintenanceDirective implements Validator {


    validate(control: AbstractControl): ValidationErrors | null {
        console.log(control, 'kalel');
        return null;        
    }
}
