import { Router } from 'express';

import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/usuarios', UsersController.store);

export default routes;
