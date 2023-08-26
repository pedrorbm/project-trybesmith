import { Request, Response } from 'express';
import loginService from '../services/login.service';

const findUser = async (req: Request, res: Response) => {
  const user = await loginService.findUser(req.body);

  return res.status(user.status).json(user.data);
};

export default {
  findUser,
};
