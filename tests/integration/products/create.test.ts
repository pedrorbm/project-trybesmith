import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () {
    sinon.restore();
  });

  it('Endpoint POST create', async function () {
    const httpRequestBody = productMock.newProduct;
    const newProductReturn = ProductModel.build(productMock.postProduct);
    sinon.stub(ProductModel, 'create').resolves(newProductReturn);

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.be.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.returnCreate);
  });

});
