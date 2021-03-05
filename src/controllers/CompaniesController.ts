import { Request, Response } from 'express';
import IController from '../interfaces/IController';

class CompaniesController implements IController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
}

export default CompaniesController;
