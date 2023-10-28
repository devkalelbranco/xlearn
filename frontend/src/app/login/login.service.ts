import { Injectable } from "@angular/core";
import { LoginToken } from "../models/login-token";
import { HttpClient } from "@angular/common/http"
import { LoginUser } from "../models/login-user";
import { lastValueFrom } from "rxjs";
@Injectable()
export class LoginService {
    private _urlAuthenticate = "/api/authenticate";

    constructor(private httpClient:HttpClient){

    }

    public login(email:string, password:string):Promise<LoginToken>{
        const user:LoginUser = {email, password};
        return lastValueFrom<LoginToken>(this.httpClient.post<LoginToken>(this._urlAuthenticate, user));
    }
}