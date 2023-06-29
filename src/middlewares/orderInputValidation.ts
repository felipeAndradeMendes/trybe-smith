import { Request, Response, NextFunction } from 'express';
import orderSchema from './joiSchema';

function validatedOrderInput(req: Request, res: Response, next: NextFunction) {
  const orderInput = req.body;
  const { error } = orderSchema.orderSchema.validate(orderInput);

  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }

  next();
}

export default {
  validatedOrderInput,
};