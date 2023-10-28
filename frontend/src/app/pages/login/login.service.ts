import { Injectable } from "@angular/core";
import { LoginToken } from "../../models/login-token";
import { HttpClient } from "@angular/common/http"
import { LoginUser } from "../../models/login-user";
import { lastValueFrom } from "rxjs";
import { environment } from "src/environment/environment.dev";
@Injectable()
export class LoginService {
    private _urlAuthenticate = "/api/authenticate";

    constructor(private httpClient:HttpClient){

    }

    public login(email:string, password:string):Promise<LoginToken>{
        const user:LoginUser = {email, password};
        const loginTokenPromise = lastValueFrom<LoginToken>(this.httpClient.post<LoginToken>(this._urlAuthenticate, user));

        return new Promise<LoginToken>((resolve, reject) => {
            loginTokenPromise.then((res) => {
                if(res?.token){
                    sessionStorage.setItem(environment.X_LEARN_AUTH_SESSION_KEY, res.token);
                }
                resolve(res);
            }).catch((err) => reject(err.error));
        });        
    }
}