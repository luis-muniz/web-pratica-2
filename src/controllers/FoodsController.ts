import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import CreateFoodService from '../services/CreateFoodService';
import ShowFoodService from '../services/ShowFoodService';
import ListAllFoodsService from '../services/ListAllFoodsService';
import DeleteFoodService from '../services/DeleteFoodService';
import UpdateFoodService from '../services/UpdateFoodService';

class FoodsController implements IController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, ingredients, price } = request.body;

      const createFoodService = new CreateFoodService();

      const food = await createFoodService.execute({
        companyId: id,
        name,
        ingredients,
        price,
      });

      return response.json(food);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { companyId, foodId } = request.params;

      const showFoodService = new ShowFoodService();

      const client = await showFoodService.execute({ companyId, foodId });

      return response.json(client);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const listAllFoodsService = new ListAllFoodsService();

      const foods = await listAllFoodsService.execute(id);

      return response.json(foods);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { companyId, foodId } = request.params;
      const deleteFoodService = new DeleteFoodService();

      await deleteFoodService.execute({ companyId, foodId });

      return response.json({ status: 'Deleted with sucess' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { companyId, foodId } = request.params;
      const { data } = request.body;

      const updateFoodService = new UpdateFoodService();

      const food = await updateFoodService.execute({
        companyId,
        foodId,
        data,
      });

      return response.json(food);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default FoodsController;
