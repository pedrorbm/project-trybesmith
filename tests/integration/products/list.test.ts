import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () {
    sinon.restore();
  });

  it('Endpoint GET findAll', async function () {
    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.returnGetProducts);
  });

});

