import { getCustomRepository } from 'typeorm';
import Client from '../models/Client';
import ClientsRepository from '../repositories/ClientsRepository';

class ListAllClientsService {
  public async execute(): Promise<Client[]> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const companies = await clientsRepository.find();

    return companies;
  }
}

export default ListAllClientsService;
