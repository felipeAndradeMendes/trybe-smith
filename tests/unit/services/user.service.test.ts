import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';

import userMock from '../../mocks/user.mock';
import userService from '../../../src/services/user.service';


describe('ProductsService - Unidade', function () {
  beforeEach(function () { sinon.restore(); });
  it('Retorna um usuario que existe', async function () {
    const parameters = 1;
    const mockFindOneReturn = UserModel.build(userMock.userModelSuccessResponse);
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const serviceResponse = await userService.findOne(parameters);

    expect(serviceResponse?.dataValues).to.deep.equal(userMock.userModelSuccessResponse);
  });
});
