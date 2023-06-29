import { Request, Response, NextFunction } from 'express';
import validateToken from '../utils/jwtUtils';

function validateJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    validateToken.validateToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export default {
  validateJWT,
};