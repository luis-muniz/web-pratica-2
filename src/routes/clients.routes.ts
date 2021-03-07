import { Router } from 'express';
import ClientsController from '../controllers/ClientsController';

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', clientsController.store);
clientsRouter.get('/:id', clientsController.show);
clientsRouter.get('/', clientsController.index);
clientsRouter.delete('/:id', clientsController.delete);
clientsRouter.patch('/:id', clientsController.update);

export default clientsRouter;
