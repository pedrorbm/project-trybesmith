import ProductModel, { ProductInputtableTypes,
  ProductSequelizeModel } from '../database/models/product.model';
import { Response } from '../types/Response';
import { ProductPost } from '../types/ProductPost';

const create = async (
  product: ProductInputtableTypes,
): Promise<Response<ProductPost>> => {
  const newProduct = await ProductModel.create(product);
  const { id, name, price } = newProduct.dataValues;

  return {
    status: 201,
    data: { id, name, price },
  };
};

const findAll = async (): Promise<Response<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return {
    status: 200,
    data: products,
  };
};

export default {
  create,
  findAll,
};
