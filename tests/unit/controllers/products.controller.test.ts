import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import productMock from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';
import productController from '../../../src/controllers/product.controller';

chai.use(sinonChai);

describe('ProductsController - Unidade', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Ao criar um produto, retoirna status 201 e novo produto', async function () {
    req.body = productMock.newProduct;
    const serviceResponse = productMock.createProductServiceResponse;
    sinon.stub(productService, 'create').resolves(serviceResponse);

    await productController.create(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.productCreated);
  });

});
