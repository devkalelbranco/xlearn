import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'x-input',
  templateUrl: './x-input.component.html',
  styleUrls: ['./x-input.component.sass'],  
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => XInputComponent),
      multi: true
    },    
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class XInputComponent {  

  @Input('ngModel') value:string = "";
  @Output('ngModelChange') valueChange:EventEmitter<string> = new EventEmitter<string>();  

  @Input('placeholder') placeholder?:string = "";
  @Input('aria-label') ariaLabel?:string = "";
  @Input('class') set class(value:string) {
    this._class = `form-control ${value}`
  }

  protected _class?:string = 'form-control';    
}
