import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res, next) => {
	return res.status(200).json({ message: "Im here moda foca!"});
});

export default routes;
