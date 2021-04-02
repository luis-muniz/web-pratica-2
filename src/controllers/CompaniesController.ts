import { Request, Response } from 'express';
import IController from '../interfaces/IController';
import CreateCompanyService from '../services/CreateCompanyService';
import ShowCompanyService from '../services/ShowCompanyService';
import ListAllCompaniesService from '../services/ListAllCompaniesService';
import DeleteCompanyService from '../services/DeleteCompanyService';
import UpdateCompanyService from '../services/UpdateCompanyService';

class CompaniesController implements IController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { name, url, description } = request.body;

      const createCompanyService = new CreateCompanyService();

      const company = await createCompanyService.execute({
        name,
        url,
        description,
      });

      return response.json(company);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const showCompanyService = new ShowCompanyService();

      const company = await showCompanyService.execute(id);

      return response.json(company);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listAllCompaniesService = new ListAllCompaniesService();

      const companies = await listAllCompaniesService.execute();

      return response.json(companies);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const deleteCompanyService = new DeleteCompanyService();

      await deleteCompanyService.execute(id);

      return response.json({ status: 'Deleted with sucess' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { data } = request.body;

      const updateCompanyService = new UpdateCompanyService();

      const company = await updateCompanyService.execute({ id, data });

      return response.json(company);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default CompaniesController;
