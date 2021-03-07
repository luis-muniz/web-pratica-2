import { getCustomRepository } from 'typeorm';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';

class ListAllCompaniesService {
  public async execute(): Promise<Company[]> {
    const companiesRespository = getCustomRepository(CompaniesRepository);

    const companies = await companiesRespository.find();

    return companies;
  }
}

export default ListAllCompaniesService;
