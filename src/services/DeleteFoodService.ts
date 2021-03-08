import { validate } from 'uuid';
import { getCustomRepository } from 'typeorm';
import FoodsRepository from '../repositories/FoodsRepository';
import IDeleteFoodDTO from '../dtos/IDeleteFoodDTO';

class DeleteFoodService {
  public async execute({ companyId, foodId }: IDeleteFoodDTO): Promise<void> {
    const foodsRepository = getCustomRepository(FoodsRepository);

    if (!validate(companyId) || !validate(foodId)) {
      throw new Error("We didn't find any company/food with this id");
    }

    const food = await foodsRepository.findOne({
      where: {
        id: foodId,
        company: companyId,
      },
    });

    if (!food) {
      throw new Error("We didn't find any company/food with this id");
    }

    await foodsRepository.delete(food.id);
  }
}

export default DeleteFoodService;
