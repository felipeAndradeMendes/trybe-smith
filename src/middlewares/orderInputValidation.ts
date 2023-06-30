import { Request, Response, NextFunction } from 'express';
import orderSchema from './joiSchema';

function validateProductIdsArray(prodIds: Array<number>) {
  return prodIds.length === 0;
}

function validatedOrderInput(req: Request, res: Response, next: NextFunction) {
  const orderInput = req.body;

  const { error } = orderSchema.orderSchema.validate(orderInput);
  
  if (error && error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  }
  
  const validateProdIds = validateProductIdsArray(orderInput.productIds);

  if (validateProdIds) {
    return res.status(422).json({ message: '"productIds" must include only numbers' });
  }

  if (error) {
    return res.status(422).json({ message: error.message });
  }

  next();
}

export default validatedOrderInput;