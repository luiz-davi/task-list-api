import { Router } from 'express';
import User from './app/models/User'

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'luiz davi',
    email: 'davi@gmail.com',
    password_hash: '8u76786ftyf78'
  });

  return res.status(200).json({
    message: "Im here moda foca!",
    user
  })
});

export default routes;
