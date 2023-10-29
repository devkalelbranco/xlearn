import { Injectable } from "@angular/core";
import { environment } from "src/environment/environment.dev";

@Injectable()
export class AuthService {
    
    public isLoggedIn():boolean{        
        return (sessionStorage.getItem(environment.X_LEARN_AUTH_SESSION_KEY) !== "" && sessionStorage.getItem(environment.X_LEARN_AUTH_SESSION_KEY) !== null) ?? false;
    }

}