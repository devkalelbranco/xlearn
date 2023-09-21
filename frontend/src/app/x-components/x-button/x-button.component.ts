import { Component, Input } from '@angular/core';
import { Types } from '../enums/types.enum';
import { Sizes } from '../enums/sizes.enum';

@Component({
  selector: 'x-button',
  templateUrl: './x-button.component.html',
  styleUrls: ['./x-button.component.sass']
})
export class XButtonComponent {
  @Input('type') set type(value:string){
    if (value == Types.primary){
      this.class = this.class + " btn-primary"
    } 
  }

  @Input('size') set size(value:string){
    if(value == Sizes.large){
      this.class = this.class + " btn-lg";
    }
  }

  @Input('label') label?:string;

  protected class = 'btn'
}
