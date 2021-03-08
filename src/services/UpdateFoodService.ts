import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import Food from '../models/Food';
import IUpdateFoodDTO, { IData } from '../dtos/IUpdateFoodDTO';
import FoodsRepository from '../repositories/FoodsRepository';

class UpdateFoodService {
  public async execute({
    companyId,
    foodId,
    data,
  }: IUpdateFoodDTO): Promise<Food | undefined> {
    const foodsRepository = getCustomRepository(FoodsRepository);
    if (!validate(companyId) || !validate(foodId)) {
      throw new Error("We didn't find any company/food with this id");
    }

    if (!this.isValidData(data)) {
      throw new Error('Data to be updated is not valid');
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

    const foodUpdated = await foodsRepository.save({ id: foodId, ...data });

    return foodUpdated;
  }

  private isValidData(data: IData): boolean {
    const compareData: IData = {
      name: 'compare',
      ingredients: 'compare',
      price: 0.0,
    };

    const propsCompare = Object.keys(compareData);
    const propsArray = Object.keys(data);

    const arrayWithPropsInvalid = propsArray.filter(
      prop => !propsCompare.includes(prop),
    );

    if (arrayWithPropsInvalid.length > 0) {
      return false;
    }

    return true;
  }
}

export default UpdateFoodService;
