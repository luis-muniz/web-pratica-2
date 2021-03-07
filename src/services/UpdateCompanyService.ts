import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import Company from '../models/Company';
import CompaniesRepository from '../repositories/CompaniesRepository';
import IUpdateCompanyDTO, { IData } from '../dtos/IUpdateCompanyDTO';

class UpdateCompanyService {
  public async execute({
    id,
    data,
  }: IUpdateCompanyDTO): Promise<Company | undefined> {
    const companiesRespository = getCustomRepository(CompaniesRepository);
    if (!validate(id) || !(await companiesRespository.findOne({ id }))) {
      throw new Error("We didn't find any company with this id");
    }

    if (!this.isValidData(data)) {
      throw new Error('Data to be updated is not valid');
    }

    const companyUpdated = await companiesRespository.save({ id, ...data });

    return companyUpdated;
  }

  private isValidData(data: IData): boolean {
    const compareData: IData = {
      name: 'compare',
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

export default UpdateCompanyService;
