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

// function validatedOrderInputExtras(req: Request, res: Response, next: NextFunction) {
//   const orderInput = req.body;
//   const { error } = orderSchema.orderSchema.validate(orderInput);

//   if (error && typeof orderInput.userId !== 'number') {
//     return res.status(422).json({ message: '"userId" must be a number' });
//   }

//   if (error && orderInput.productIds.length < 1) {
//     return res.status(422).json({ message: '"productIds" must include only numbers' });
//   }

//   next();
// }

/* Parei no req 06, tentando resolver as mensagens de erro de validação.
  Testar usar uma função somente para os casos que estão dando erro ou deixar de usar o Joi e 
  fazer middlewares originais na mão pra voltar a msg especifica de erro 
  
  Tem que fazer mais testes tb, pq a cobertura está em 61%, portanto parou de passar os reqs
  apos o 03 */

export default validatedOrderInput;