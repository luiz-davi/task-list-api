import express from 'express';
import routes from './routes';
// Inicializando conexão com banco e os modelos
import './database';

class App {

constructor(){
	this.server = express();

	this.middlewares();
	this.routes();
}

routes(){
	this.server.use(express.json());
}

middlewares(){
  this.server.use(express.json());
	this.server.use(routes);
}

}

export default new App().server;
