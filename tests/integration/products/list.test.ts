import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () {
    sinon.restore();
  });

  it('Endpoint GET findAll', async function () {
    const products = productMock.returnGetProducts;
    const productsReturn = ProductModel.bulkBuild(products);
    sinon.stub(ProductModel, 'findAll').resolves(productsReturn)

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(products);
  });

});

