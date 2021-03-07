import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import Client from '../models/Client';
import ClientsRepository from '../repositories/ClientsRepository';
import IUpdateClientDTO, { IData } from '../dtos/IUpdateClientDTO';

class UpdateClientService {
  public async execute({
    id,
    data,
  }: IUpdateClientDTO): Promise<Client | undefined> {
    const clientsRespository = getCustomRepository(ClientsRepository);
    if (!validate(id) || !(await clientsRespository.findOne({ id }))) {
      throw new Error("We didn't find any client with this id");
    }

    if (!this.isValidData(data)) {
      throw new Error('Data to be updated is not valid');
    }

    const clientUpdated = await clientsRespository.save({ id, ...data });

    return clientUpdated;
  }

  private isValidData(data: IData): boolean {
    const compareData: IData = {
      name: 'compare',
      address: 'compare',
      email: 'compare',
      phone: 'compare',
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

export default UpdateClientService;
