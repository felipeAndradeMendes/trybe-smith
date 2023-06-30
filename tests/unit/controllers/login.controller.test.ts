import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import loginMock from '../../mocks/login.mock';

import loginService from '../../../src/services/login.service';
import loginController from '../../../src/controllers/login.controller';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Retorna erro quando algo inesperado voltar da service', async function () {
    req.body = loginMock.validLoginBody;
    const serviceResponse = undefined;
    sinon.stub(loginService, 'login').resolves(serviceResponse);

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWith({ message: 'Algo deu errado' })
  });
});
