import { UnauthorizedError } from "../../shared/ApiError";
import UseCase from "../../shared/UseCase";
import User from "../../usuario/model/User";
import UserRepository from "../../usuario/service/UserRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class AuthenticateUser implements UseCase<Partial<User>, Partial<string | null>>{
    
    constructor(private readonly repository:UserRepository){}
    
    async executar(input: Partial<User>): Promise<string> {
        const {email, password} = input;

        const userExists = await this.repository.findByEmail(email ?? '') ?? null
        if(!userExists){
            throw new UnauthorizedError("Usuário ou senha inválidos")
        }

        const verifyPass = await bcrypt.compare(password ?? '', userExists.password)
        if(!verifyPass){
            throw new UnauthorizedError("Usuário ou senha inválidos")
        }

        const {id} = userExists

        const token = jwt.sign({id, email}, process.env.JWT_PASS ?? '', {expiresIn: '8h'})

        return token;
    }

}