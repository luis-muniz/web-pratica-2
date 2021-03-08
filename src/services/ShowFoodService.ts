import { validate } from 'uuid';
import { getCustomRepository } from 'typeorm';
import Food from '../models/Food';
import FoodsRepository from '../repositories/FoodsRepository';
import IShowFoodDTO from '../dtos/IShowFoodDTO';

class ShowFoodService {
  public async execute({
    companyId,
    foodId,
  }: IShowFoodDTO): Promise<Food | undefined> {
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
      throw new Error("We didn't find any food with this id");
    }

    return food;
  }
}

export default ShowFoodService;
