// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import { Request, Response } from 'express';
// import productMock from '../../mocks/product.mock';
// import productService from '../../../src/services/product.service';
// import productController from '../../../src/controllers/product.controller';

// chai.use(sinonChai);

// describe('ProductsController', function () {
//   const req = {} as Request;
//   const res = {} as Response;

//   beforeEach(function () {
//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns(res);
//     sinon.restore();
//   });

//   describe('Controller Verifica Products', function () {

//     it('Controller - Endpoint POST: Cadastrando um produto com sucesso', async function () {
//       req.body = productMock.newProduct;
//       const returnCreateService = productMock.returnCreateService;
//       const returnCreate = productMock.returnCreate;
//       sinon.stub(productService, 'create').resolves(returnCreateService);
    
//       await productController.create(req, res);
    
//       expect(res.status).to.have.been.calledWith(201);
//       expect(res.json).to.have.been.calledWith(returnCreate);
//     });
//   });

// });
