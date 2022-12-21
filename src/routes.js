import { Router } from 'express';

import UsersController from './app/controllers/UsersController';
import AutenticacaoController from './app/controllers/AutenticacaoController';

const routes = new Router();

routes.post('/usuarios', UsersController.store);
routes.post('/usuarios/auth', AutenticacaoController.auth);

export default routes;
