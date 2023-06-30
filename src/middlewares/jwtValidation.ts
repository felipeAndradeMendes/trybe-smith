import { Request, Response, NextFunction } from 'express';
import validateToken from '../utils/jwtUtils';

function validateJWT(req: Request, res: Response, next: NextFunction): Response | void {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const data = authorization.split(' ');

  if (!data[1]) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validatiton = validateToken.validateToken(data[1]);
    res.locals.user = validatiton;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default validateJWT;
