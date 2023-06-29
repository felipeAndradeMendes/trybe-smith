import { Request, Response, NextFunction } from 'express';
import s from './joiSchema';

function inputValidation(req: Request, res: Response, next: NextFunction) {
  const productInput = req.body;
  
  const { error } = s.productSchema.validate(productInput);
  // console.log('ERRO:', error);

  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }

  if (error && !error.message.includes('required')) {
    return res.status(422).json({ message: error.message });
  }

  next();
} 

export default {
  inputValidation,
};