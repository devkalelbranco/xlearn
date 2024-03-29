import { Express } from "express";
import CreateUser from "../core/usuario/service/CreateUser";
import { Request, Response } from 'express';

export default class CreateUserController{

    constructor(
        readonly server:Express,
        readonly useCase:CreateUser){

            server.post('/users', async (req:Request, response:Response) => {                
                const {name, email, password} = req.body;
                await useCase.executar({name, email, password});
                response.statusCode = 201;
                response.json({});
                return response
            })

    }

}