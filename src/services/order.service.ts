import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Response } from '../types/Response';
import { OrderProductIds } from '../types/Order';

const findAll = async (): Promise<Response<OrderProductIds[]>> => {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const ordersResult = orders.map(({ dataValues: { id, userId, productIds } }) => {
    const ids = productIds ? productIds.map((product) => product.id) : [];
    return ({
      id,
      userId,
      productIds: ids,
    });
  });

  return {
    status: 200,
    data: ordersResult,
  };
};

export default {
  findAll,
};
