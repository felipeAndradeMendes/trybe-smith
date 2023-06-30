import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'sequelize';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';

import productMock from '../../mocks/product.mock';

describe('ProductsService - Unidade', function () {
  beforeEach(function () { sinon.restore(); });
  it('Ao criar um produto, retorna status ok e novo produto criado', async function () {
    const parameters = productMock.newProduct;
    const mockCreateReturn = ProductModel.build(productMock.productCreated);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const serviceResponse = await productService.create(parameters);

    expect(serviceResponse.status).to.equal('ok');
    expect(serviceResponse.data).to.deep.equal(productMock.productCreated);
  });

  // it('Ao atualizar um produto, retorna status correto', async function () {
  //   const { productIdArray, orderId } = productMock.productUpdateParameters;
  //   const mockUpdateReturn = ProductModel.build(productIdArray, orde)
  // });


});
