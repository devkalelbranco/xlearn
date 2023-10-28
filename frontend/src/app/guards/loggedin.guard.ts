import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";


@Injectable()
export class LoggedInGuard {

    constructor(
        private authService:AuthService,
        private router:Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('teste', this.authService.isLoggedIn())
        if(!this.authService.isLoggedIn()){
            if(!this.router.url.includes('login')){
                this.router.navigate(['login']);
            }
            return false;
        }

        return true;

    }

}