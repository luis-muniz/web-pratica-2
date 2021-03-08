import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import CompaniesRepository from '../repositories/CompaniesRepository';
import FoodsRepository from '../repositories/FoodsRepository';
import Food from '../models/Food';

class ListAllFoodsService {
  public async execute(companyId: string): Promise<Food[]> {
    const companiesRespository = getCustomRepository(CompaniesRepository);
    const foodsRepository = getCustomRepository(FoodsRepository);

    if (!validate(companyId)) {
      throw new Error("We didn't find any company with this id");
    }

    const company = await companiesRespository.findOne({ id: companyId });
    if (!company) {
      throw new Error("We didn't find any company with this id");
    }

    const foods = await foodsRepository.find();

    return foods;
  }
}

export default ListAllFoodsService;
