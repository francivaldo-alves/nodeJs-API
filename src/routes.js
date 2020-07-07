import { Router } from 'express';
import { uuid } from 'uuidv4';
import CategoryController from './controllers/CategoryController';
import ProductController from './controllers/ProductController';

const routes = new Router();

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.post('/productd', ProductController.store);
routes.get('/productd', ProductController.index);
routes.put('/productd/:id', ProductController.update);
routes.delete('/productd/:id', ProductController.delete);
export default routes;
