import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import orderMock from '../../mocks/order.mock';
import OrderModel from '../../../src/database/models/order.model';
chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  const noToken = { message: 'Token not found' };

  // it('Retorna erro se não houver token', async function () {
  //   const httpRequest = orderMock.orderRequestBody;
  //   const mockCreateReturn = OrderModel.build(orderMock.orderCreateReturn);

  //   sinon.stub(OrderModel, 'create').resolves(mockCreateReturn);

  //   const httpResponse = await chai
  //   .request(app)
  //   .post('/orders')
  //   .send(httpRequest)
  //   .set('Authorization', 'genericToken');
  
  //   expect(httpResponse.status).to.equal(401);
  //   expect(httpResponse).to.deep.equal(noToken);
  // });

});
