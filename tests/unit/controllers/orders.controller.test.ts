import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import orderMock from '../../mocks/order.mock';
import userMock from '../../mocks/user.mock';

import userService from '../../../src/services/user.service';
import orderController from '../../../src/controllers/order.controller';
import UserModel from '../../../src/database/models/user.model';
import orderService from '../../../src/services/order.service';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Retorna erro se não existir o usuario', async function () {
    req.body = orderMock.orderRequestBody;
    const serviceResponse = null;
    sinon.stub(userService, 'findOne').resolves(serviceResponse);

    await orderController.create(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: '"userId" not found' });
  });

  it('Retorna erro ao dar algo errado na criação do pedido', async function () {
    req.body = orderMock.orderRequestBody;
    const mockFindOneReturn = UserModel.build(userMock.userModelSuccessResponse)
    sinon.stub(userService, 'findOne').resolves(mockFindOneReturn);
    const orderServiceResponse = undefined;
    sinon.stub(orderService, 'create').resolves(orderServiceResponse);

    await orderController.create(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Algo de errado ocorreu' });

  });

});
