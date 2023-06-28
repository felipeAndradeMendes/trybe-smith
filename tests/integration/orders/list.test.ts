import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import orderMocks from '../../mocks/order.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao listar pedidos, retornar status 200 e lista de pedidos', async function () {
    // const mockFormatedFindAllReturn = orderMocks.formatedReturnedOrders.map((product) => {
    //   return ProductModel.build(product)
    // });

    const mockFindAllReturn = orderMocks.returnedOrders.map((order) => {
      return OrderModel.build(order)
    });
    console.log('MOCK FINDALL RETURN:', mockFindAllReturn)
    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

    const httpResponse = await chai.request(app).get('/orders').send();
    console.log('HTTP RESPONSE BODY:', httpResponse.body);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal(orderMocks.formatedReturnedOrders);
  });
});
