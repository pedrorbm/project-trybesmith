import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Endpoint GET findAll', async function () {
    const orders = orderMock.returnGetOrders;
    const ordersReturn = orderMock.returnGetOrdersBody;
    const productsReturn = OrderModel.bulkBuild(orders);
    sinon.stub(OrderModel, 'findAll').resolves(productsReturn)

    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(ordersReturn);
  });
});
