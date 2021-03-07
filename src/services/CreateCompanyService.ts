import { getCustomRepository } from 'typeorm';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

class CreateCompanyService {
  public async execute({ name }: ICreateCompanyDTO): Promise<Company> {
    const companiesRespository = getCustomRepository(CompaniesRepository);

    const company = companiesRespository.create({ name });

    await companiesRespository.save(company);

    return company;
  }
}

export default CreateCompanyService;
