import express from 'express';
import productController from '../controllers/product.controller';

const route = express.Router();

route.post('/', productController.create);

// route.get('/', productController.findAll);

export default route;
