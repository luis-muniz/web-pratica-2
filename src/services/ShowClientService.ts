import { validate } from 'uuid';
import { getCustomRepository } from 'typeorm';
import Client from '../models/Client';
import ClientsRepository from '../repositories/ClientsRepository';

class ShowClientService {
  public async execute(id: string): Promise<Client | undefined> {
    const clientsRespository = getCustomRepository(ClientsRepository);

    if (!validate(id) || !(await clientsRespository.findOne({ id }))) {
      throw new Error("We didn't find any client with this id");
    }

    const client = await clientsRespository.findOne({ id });

    return client;
  }
}

export default ShowClientService;
