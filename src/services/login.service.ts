import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { LoginPayload } from '../types/LoginPayload';
import { ServiceResponseLogin } from '../types/ServiceResponse';
import jwtUtils from '../utils/jwtUtils';

async function login({
  username, password }: LoginPayload): Promise<ServiceResponseLogin | undefined> {
  if (!username || !password) {
    return { status: 400, data: { message: '"username" and "password" are required' } };
  }
  
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const token = jwtUtils.sign({ id: user.dataValues.id, username: user.dataValues.username });
  return { status: 200, data: { token } };
}

export default {
  login,
};