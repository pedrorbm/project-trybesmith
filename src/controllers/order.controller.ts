import { Request, Response } from 'express';
import orderService from '../services/order.service';

const findAll = async (_req: Request, res: Response) => {
  const { status, data } = await orderService.findAll();

  return res.status(status).json(data);
};

const create = async (req: Request, res: Response) => {
  const { status } = await orderService.create(req.body);

  return res.status(status).json(req.body);
};

export default {
  findAll,
  create,
};
