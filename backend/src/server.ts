import 'express-async-errors';
import express, { Router } from 'express';
import CreateUserController from './adapters/CreateUserController';
import CreateUser from './core/usuario/service/CreateUser';
import UserRepository from './core/usuario/service/UserRepository';
import UserRepositoryPrismaSqlite from './external/prisma/UserRepositoryPrismaSqlite';
import AuthenticateUser from './core/login/service/AuthenticateUser';
import AuthenticateUserController from './adapters/AuthenticateUserController';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();
const cors = require('cors')

app.use(cors()) /*Melhorar essa parte*/
app.use(express.json())
/**********************************ROUTES *********************************/

const userRepository:UserRepository = new UserRepositoryPrismaSqlite()
const createUser:CreateUser = new CreateUser(userRepository)
new CreateUserController(app, createUser);

const authenticateUser:AuthenticateUser = new AuthenticateUser(userRepository)
new AuthenticateUserController(app, authenticateUser);

app.use(errorMiddleware)

app.listen(3333, () => 'server running on port 3333')