import { Express, Request, Response, response } from "express";
import AuthenticateUser from "../core/login/service/AuthenticateUser";


export default class AuthenticateUserController {
    constructor(
        readonly server:Express,
        readonly useCase:AuthenticateUser){
            server.post('/authenticate', async (req:Request, res:Response) => {
                const {email, password} = req.body;
                const token = await useCase.executar({email, password});
                res.statusCode = 200;
                res.json({token});
                return res;
            })
        }
}