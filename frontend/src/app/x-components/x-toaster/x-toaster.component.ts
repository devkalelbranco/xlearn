import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { XToasterTypes } from './x-toaster-types.enum';

@Component({
  selector: 'x-toaster',
  templateUrl: './x-toaster.component.html',
  styleUrls: ['./x-toaster.component.scss']
})
export class XToasterComponent {
  @ViewChild("toast") toast:ElementRef<any> = new ElementRef<any>({});
  
  protected message:string = "";
  protected type:string = ""
  protected types = XToasterTypes;

  public show(message:string = ""){
    this.message = message;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(this.toast.nativeElement)                
    toastBootstrap.show()    
  }

  public setDanger(){
    this.type = XToasterTypes.DANGER
  }

  public setSuccess(){
    this.type = XToasterTypes.SUCCESS
  }

}
