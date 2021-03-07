import { Router } from 'express';
import companiesRouter from './companies.routes';
import clientsRouter from './clients.routes';

const routes = Router();

routes.use('/companies', companiesRouter);

routes.use('/clients', clientsRouter);

export default routes;
