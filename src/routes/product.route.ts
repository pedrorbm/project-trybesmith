import express from 'express';
import productController from '../controllers/product.controller';
import verifyProduct from '../middlewares/verifyProduct';

const route = express.Router();

route.post(
  '/',
  verifyProduct.verifyNameProduct,
  verifyProduct.verifyPriceProduct,
  productController.create,
);

route.get('/', productController.findAll);

export default route;
