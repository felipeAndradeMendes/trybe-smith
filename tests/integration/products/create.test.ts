import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('POST /products - Integração', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao criar um produto retorna status e data certos', async function () {
    const httpRequestBody = productMock.newProduct;
    const mockCreatereturn = ProductModel.build(productMock.productCreated);
    sinon.stub(ProductModel, 'create').resolves(mockCreatereturn);

    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.deep.equal(productMock.productCreated);
  });

});
