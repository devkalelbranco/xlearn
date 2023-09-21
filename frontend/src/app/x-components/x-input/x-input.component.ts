import { Component, Input } from '@angular/core';

@Component({
  selector: 'x-input',
  templateUrl: './x-input.component.html',
  styleUrls: ['./x-input.component.sass']
})
export class XInputComponent {
  @Input('placeholder') placeholder?:string = "";
  @Input('aria-label') ariaLabel?:string = "";
  @Input('class') set class(value:string) {
    this._class = `form-control ${value}`
  }

  protected _class?:string = 'form-control';
}
