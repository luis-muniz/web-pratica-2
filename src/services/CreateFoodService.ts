import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import CompaniesRepository from '../repositories/CompaniesRepository';
import FoodsRepository from '../repositories/FoodsRepository';
import ICreateFoodDTO from '../dtos/ICreateFoodDTO';
import Food from '../models/Food';

class CreateFoodService {
  public async execute({
    companyId,
    name,
    ingredients,
    price,
  }: ICreateFoodDTO): Promise<Food> {
    const companiesRespository = getCustomRepository(CompaniesRepository);
    const foodsRepository = getCustomRepository(FoodsRepository);

    if (!validate(companyId)) {
      throw new Error("We didn't find any company with this id");
    }

    const company = await companiesRespository.findOne({ id: companyId });
    if (!company) {
      throw new Error("We didn't find any company with this id");
    }

    if (!name || !ingredients || !price) {
      throw new Error('Data to be registered are not valid');
    }

    const food = foodsRepository.create({
      company: company.id,
      name,
      ingredients,
      price,
    });

    await foodsRepository.save(food);

    return food;
  }
}

export default CreateFoodService;
