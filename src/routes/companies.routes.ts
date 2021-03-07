import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';

const companiesRouter = Router();
const companiesController = new CompaniesController();

companiesRouter.post('/', companiesController.store);
companiesRouter.get('/:id', companiesController.show);
companiesRouter.get('/', companiesController.index);
companiesRouter.delete('/:id', companiesController.delete);
companiesRouter.patch('/:id', companiesController.update);

export default companiesRouter;
