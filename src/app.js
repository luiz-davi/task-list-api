import express from 'express';
import routes from './routes';
// fazendo projeto enxegar as variáveis de ambiente no .env
import 'dotenv/config';
// Inicializando conexão com banco e os modelos
import './database';

class App {

  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  routes(){
    this.server.use(routes);
  }

  middlewares(){
    this.server.use(express.json());
  }

}

export default new App().server;
