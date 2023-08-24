import { Request, Response } from 'express';
import orderService from '../services/order.service';

const findAll = async (_req: Request, res: Response) => {
  const { status, data } = await orderService.findAll();

  return res.status(status).json(data);
};

export default {
  findAll,
};
