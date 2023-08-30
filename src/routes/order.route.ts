import express from 'express';
import orderController from '../controllers/order.controller';
import verifyToken from '../middlewares/verifyToken';
import verifyOrder from '../middlewares/verifyOrder';

const route = express.Router();

route.get('/', orderController.findAll);

route.post(
  '/', 
  verifyToken,
  verifyOrder.verifyUserId,
  verifyOrder.verifyProductIds,
  orderController.create,
);

export default route;
