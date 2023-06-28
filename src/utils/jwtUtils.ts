import jwt from 'jsonwebtoken';
import { JwtPayload } from '../types/JwtPayload';

const secretJwt = process.env.JWT_SECRET || 'secret';

const sign = (payload: JwtPayload): string => {
  const token = jwt.sign(payload, secretJwt);
  return token;
};

export default {
  sign,
};