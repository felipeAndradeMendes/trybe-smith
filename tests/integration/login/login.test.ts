import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login - Integração', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao não receber um username, retorna erro', async function () {
    const httpRequestBody = loginMock.noUsernameLoginBody;
    const httpResponse = (await chai.request(app).post('/login').send(httpRequestBody));

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Ao não receber um password, retorna erro', async function () {
    const httpRequestBody = loginMock.noPasswordLoginBody;
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({ message: '"username" and "password" are required' });
  });

  it('Ao não encontrar o username passado, retorna um erro', async function () {
    const httpRequestBody = loginMock.wrongUsernameLoginBody;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({ message: 'Username or password invalid' });
  });

  it('Ao receber tudo corretamente, retorna token', async function () {
    const httpRequestBody = loginMock.validLoginBody;
    const mockFindOnereturn = UserModel.build(loginMock.userFoundReturned);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOnereturn);

    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.have.key('token');
  });
});
