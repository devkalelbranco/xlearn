import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, ViewChild } from "@angular/core";
import { XToasterComponent } from "src/app/x-components/x-toaster/x-toaster.component";

@Injectable()
export class XToasterService{
    
    constructor(
        private componentResolver: ComponentFactoryResolver,
        private injector: Injector,
        private applicationRef: ApplicationRef
    ){

    }

    public error(message:string = ""){        
        const componentRef = this.createToaster().instance;
        componentRef.setDanger();
        componentRef.show(message);
    }    

    public success(message:string = ""){        
        const componentRef = this.createToaster().instance;
        componentRef.setSuccess();
        componentRef.show(message);
    }    

    private createToaster(){
        const componentRef: ComponentRef<any> = this.componentResolver.resolveComponentFactory(XToasterComponent).create(this.injector);
        this.applicationRef.attachView(componentRef.hostView);
        const domElement = (<any>componentRef.hostView).rootNodes[0];
        document.body.appendChild(domElement);
        componentRef.changeDetectorRef.detectChanges();
        return componentRef;        
    }

}