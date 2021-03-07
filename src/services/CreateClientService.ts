import { getCustomRepository } from 'typeorm';
import Client from '../models/Client';
import ClientsRepository from '../repositories/ClientsRepository';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

class CreateClientService {
  public async execute({
    name,
    address,
    email,
    phone,
  }: ICreateClientDTO): Promise<Client> {
    const clientsRespository = getCustomRepository(ClientsRepository);

    if (!name || !address || !phone || !email) {
      throw new Error('Data to be registered are not valid');
    }

    const client = clientsRespository.create({ name, address, phone, email });

    await clientsRespository.save(client);

    return client;
  }
}

export default CreateClientService;
