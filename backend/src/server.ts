import express from 'express';
import CreateUserController from './adapters/CreateUserController';
import CreateUser from './core/usuario/service/CreateUser';
import UserRepository from './core/usuario/service/UserRepository';
import UserRepositoryPrismaSqlite from './external/prisma/UserRepositoryPrismaSqlite';
import AuthenticateUser from './core/login/service/AuthenticateUser';
import AuthenticateUserController from './adapters/AuthenticateUserController';

const app = express();

app.use(express.json())

/**********************************ROUTES *********************************/

const userRepository:UserRepository = new UserRepositoryPrismaSqlite()
const createUser:CreateUser = new CreateUser(userRepository)
new CreateUserController(app, createUser);

const authenticateUser:AuthenticateUser = new AuthenticateUser(userRepository)
new AuthenticateUserController(app, authenticateUser);

app.listen(3333, () => 'server running on port 3333')