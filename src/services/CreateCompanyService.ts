import { getCustomRepository } from 'typeorm';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';

class CreateCompanyService {
  public async execute({
    name,
    description,
    url,
  }: ICreateCompanyDTO): Promise<Company> {
    const companiesRespository = getCustomRepository(CompaniesRepository);

    const company = companiesRespository.create({ name, description, url });

    await companiesRespository.save(company);

    return company;
  }
}

export default CreateCompanyService;
