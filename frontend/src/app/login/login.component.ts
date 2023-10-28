import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginToken } from '../models/login-token';
import * as bootstrap from 'bootstrap';
import { XToasterService } from '../x-services/x-toaster/XToaster.service';


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
    
    this.loginService.login(this.email, this.password).then((res:LoginToken) => {
      if(res?.token){
        sessionStorage.setItem('x-learn-token', res.token);
        this.router.navigate(['home'])
      }

    }).catch(({error}) => {     
      if(error.message){
        this.toasterService.error(error.message);
      } else {
        this.toasterService.error("Erro ao autenticar, tente novamente mais tarde");
      }

    })
  }
}