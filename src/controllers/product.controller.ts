import { Request, Response } from 'express';
import productService from '../services/product.service';

const create = async (req: Request, res: Response) => {
  try {
    const { name, price, orderId } = req.body;
    const { status, data } = await productService.create({ name, price, orderId });
  
    return res.status(status).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'deu errado!' });
  }
};

export default {
  create,
};
