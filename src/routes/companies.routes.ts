import { Router } from 'express';
import CompaniesController from '../controllers/CompaniesController';
import FoodsController from '../controllers/FoodsController';

const companiesRouter = Router();
const companiesController = new CompaniesController();
const foodsController = new FoodsController();

companiesRouter.post('/', companiesController.store);
companiesRouter.get('/:id', companiesController.show);
companiesRouter.get('/', companiesController.index);
companiesRouter.delete('/:id', companiesController.delete);
companiesRouter.patch('/:id', companiesController.update);

companiesRouter.post('/:id/foods', foodsController.store);
companiesRouter.get('/:id/foods', foodsController.index);
companiesRouter.get('/:companyId/foods/:foodId', foodsController.show);
companiesRouter.delete('/:companyId/foods/:foodId', foodsController.delete);
companiesRouter.patch('/:companyId/foods/:foodId', foodsController.update);

export default companiesRouter;
