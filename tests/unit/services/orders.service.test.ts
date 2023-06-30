import { expect } from 'chai';
import sinon from 'sinon';

import orderMock from '../../mocks/order.mock';
import OrderModel from '../../../src/database/models/order.model';
import orderService from '../../../src/services/order.service';
import productService from '../../../src/services/product.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Ao criar um pedido, retorna dados corretos', async function () {
    const parameters = orderMock.orderCreateParameters;
    const mockCreateReturn = OrderModel.build(orderMock.orderModelReturn);
    sinon.stub(OrderModel, 'create').resolves(mockCreateReturn);

    sinon.stub(productService, 'updateProducts').resolves(orderMock.productServiceSuccessResponse);

    const serviceResponse = await orderService.create(parameters);

    expect(serviceResponse?.status).to.equal('ok');
    expect(serviceResponse?.data).to.deep.equal(orderMock.orderModelReturn);
  });
});
