import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Endpoint /POST login com sucesso', async function () {
    const httpRequestBody = loginMock.validLoginBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });

  it('Endpoint /POST login faltando chave username', async function () {
    const httpRequestBody = loginMock.invalidKeyUsernameBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal(loginMock.messageKeyNotExist);
  });

  it('Endpoint /POST login faltando chave password', async function () {
    const httpRequestBody = loginMock.invalidKeyPasswordBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal(loginMock.messageKeyNotExist);
  });

  // it('Endpoint /POST login username errado', async function () {
  //   const httpRequestBody = loginMock.invalidUsernameBody
  //   const mockFindOneReturn = UserModel.build(loginMock.existingUser);
  //   sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

  //   const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

  //   expect(httpResponse.status).to.equal(401);
  //   expect(httpResponse.body).to.be.deep.equal(loginMock.messageNotExist);
  // });

  it('Endpoint /POST login password errado', async function () {
    const httpRequestBody = loginMock.invalidPasswordBody
    const mockFindOneReturn = UserModel.build(loginMock.existingUser);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal(loginMock.messageNotExist);
  });

});
