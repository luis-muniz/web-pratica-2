import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import CompaniesRepository from '../repositories/CompaniesRepository';

class DeleteCompanyService {
  public async execute(id: string): Promise<void> {
    const companiesRespository = getCustomRepository(CompaniesRepository);

    if (!validate(id) || !(await companiesRespository.findOne({ id }))) {
      throw new Error("We didn't find any company with this id");
    }

    await companiesRespository.delete({ id });
  }
}

export default DeleteCompanyService;
