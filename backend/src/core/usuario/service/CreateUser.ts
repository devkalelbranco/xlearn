import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

type Input = {
    name:string;
    email:string;
    password:string;
}

export default class CreateUser implements UseCase<Input, void> {
    
    constructor(private readonly repository:UserRepository){}
    
    async executar(input: Input): Promise<void> {
        const {name, email, password} = input;
        
        const userExists = await this.repository.findByEmail(email)
        if(userExists){
            throw new Error("Usuário ja existe")
        }

        await this.repository.create({name, email, password});
    }
    
}