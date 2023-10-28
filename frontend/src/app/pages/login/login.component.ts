import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginToken } from '../../models/login-token';
import * as bootstrap from 'bootstrap';
import { XToasterService } from '../../x-services/x-toaster/XToaster.service';
import { environment } from 'src/environment/environment.dev';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {    

  constructor(
    private router:Router,
    private loginService:LoginService,
    private toasterService:XToasterService
    ){}

  protected email:string = "";
  protected password:string = "";
  
  login(){
    
    this.loginService.login(this.email, this.password).then((res) => {
      if(res?.token){
        this.router.navigate(['home']);
      } else {
        this.toasterService.error("Erro ao autenticar, tente novamente.");
      }
    }).catch((err) => {
      if(err?.message){
        this.toasterService.error(err.message)
      } else {
        this.toasterService.error("Erro ao autenticar, tente novamente.");
      }
    });
      
  }
}