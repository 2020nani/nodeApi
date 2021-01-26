import { Router } from 'express';
import PessoaController from './controllers/PessoaController';


const routes = new Router();
routes.post('/pessoas', PessoaController.store);
routes.put('/pessoas/:id', PessoaController.update);
routes.delete('/pessoas/:id', PessoaController.delete);
routes.get('/pessoas', PessoaController.listar);


module.exports = routes;