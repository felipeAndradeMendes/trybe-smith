import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response) {
  const loginResponse = await loginService.login(req.body);

  if (!loginResponse) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }

  return res.status(loginResponse.status).json(loginResponse.data);
}

export default {
  login,
};