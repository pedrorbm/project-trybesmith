import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Service - Endpoint POST: Cadastrando uma order com sucesso', async function () {
    const newOrder = orderMock.newOrder;
    const newOrderReturn = OrderModel.build(orderMock.orderPost);
    sinon.stub(OrderModel, 'create').resolves(newOrderReturn);

    const serviceResponse = await orderService.create(newOrder);

    expect(serviceResponse.status).to.be.equal(201);
    expect(serviceResponse.data).to.be.deep.equal(newOrder);
  });

});
