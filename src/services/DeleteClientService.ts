import { getCustomRepository } from 'typeorm';
import { validate } from 'uuid';
import ClientsRepository from '../repositories/ClientsRepository';

class DeleteClientService {
  public async execute(id: string): Promise<void> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    if (!validate(id) || !(await clientsRepository.findOne({ id }))) {
      throw new Error("We didn't find any company with this id");
    }

    await clientsRepository.delete({ id });
  }
}

export default DeleteClientService;
