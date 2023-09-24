import User from "../model/User";

export default interface UserRepository {
    findByEmail(email:string):Promise<User | null>;
    create(user: Partial<User>):Promise<User>;
}