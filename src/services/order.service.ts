import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Response } from '../types/Response';
import { OrderProductIds, OrderPost, OrderPostResult } from '../types/Order';

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

const create = async (order: OrderPost): Promise<Response<OrderPostResult>> => {
  const { productIds, userId } = order;
  const createOrder = await OrderModel.create({ userId });
  productIds.map((productId) => ProductModel.update(
    { orderId: createOrder.dataValues.id }, 
    { where: { id: productId } },
  ));
  
  return {
    status: 201,
    data: order,
  };
};

export default {
  findAll,
  create,
};
