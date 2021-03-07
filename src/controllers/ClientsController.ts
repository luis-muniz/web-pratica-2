import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import CreateClientService from '../services/CreateClientService';
import ShowClientService from '../services/ShowClientService';
import ListAllClientsService from '../services/ListAllClientsService';
import DeleteClientService from '../services/DeleteClientService';
import UpdateClientService from '../services/UpdateClientService';

class ClientsController implements IController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { name, address, email, phone } = request.body;

      const createClientService = new CreateClientService();

      const client = await createClientService.execute({
        name,
        address,
        email,
        phone,
      });

      return response.json(client);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const showClientService = new ShowClientService();

      const client = await showClientService.execute(id);

      return response.json(client);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllClientsService = new ListAllClientsService();

      const clients = await listAllClientsService.execute();

      return response.json(clients);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteClientService = new DeleteClientService();

      await deleteClientService.execute(id);

      return response.json({ status: 'Deleted with sucess' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { data } = request.body;

      const updateClientService = new UpdateClientService();

      const client = await updateClientService.execute({ id, data });

      return response.json(client);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default ClientsController;
