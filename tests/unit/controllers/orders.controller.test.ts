import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import orderMock from '../../mocks/order.mock';
import orderService from '../../../src/services/order.service';
import orderController from '../../../src/controllers/order.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Controller - Endpoint POST: Cadastrando uma order com sucesso', async function () {
    req.body = orderMock.newOrder;
    const returnCreateService = orderMock.returnCreateService;
    sinon.stub(orderService, 'create').resolves(returnCreateService);

    await orderController.create(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(orderMock.newOrder);
  });
});
