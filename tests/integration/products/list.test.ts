import { ProductInputtableTypes, ProductSequelizeModel } from '../../../src/database/models/product.model';
import { ServiceResponseSuccess } from '../../../src/types/ServiceResponse';

import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import productService from '../../../src/services/product.service';

chai.use(chaiHttp);

describe('GET /products - Integração', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao listar produtos retornar status 200 e lista de produtos', async function () {
    // const buildedMock = productMock.productListReturned.forEach(product => {
      //   ProductModel.build(product);
      // });
      const mockFindAllReturn = ProductModel.build(productMock.productCreated);
      sinon.stub(ProductModel, 'findAll').resolves([mockFindAllReturn]);
      
      const httpResponse = await chai.request(app).get('/products').send();

      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal([productMock.productCreated]);
  });

});
