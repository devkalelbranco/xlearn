import { PrismaClient } from "@prisma/client";
import User from "../../core/usuario/model/User";
import UserRepository from "../../core/usuario/service/UserRepository";

export default class UserRepositoryPrismaSqlite implements UserRepository {
    private prisma:PrismaClient;
    
    constructor(){
        this.prisma = new PrismaClient();
    }

    findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({where: {email}})
    }
    create(user: User): Promise<User> {
        return this.prisma.user.create({data: user})
    }

}