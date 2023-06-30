import { Router } from 'express';
import orderController from '../controllers/order.controller';
import validateJWT from '../middlewares/jwtValidation';
import validateOrderInput from '../middlewares/orderInputValidation';

const orderRouter = Router();

orderRouter.get('/', orderController.listAll);
orderRouter.post(
  '/', 
  validateJWT, 
  validateOrderInput,
  orderController.create,
);

export default orderRouter;
