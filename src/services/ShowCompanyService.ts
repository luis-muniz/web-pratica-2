import { validate } from 'uuid';
import { getCustomRepository } from 'typeorm';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

class ShowCompanyService {
  public async execute(id: string): Promise<Company | undefined> {
    const companiesRespository = getCustomRepository(CompaniesRepository);

    if (!validate(id) || !(await companiesRespository.findOne({ id }))) {
      throw new Error("We didn't find any company with this id");
    }

    const company = await companiesRespository.findOne({ id });

    return company;
  }
}

export default ShowCompanyService;
