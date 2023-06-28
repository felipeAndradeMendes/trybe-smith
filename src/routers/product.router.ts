import { Router } from 'express';
import productController from '../controllers/product.controller';
import inputValidation from '../middlewares/productInputValidation';

const productRouter = Router();

productRouter.post('/', inputValidation.inputValidation, productController.create);
productRouter.get('/', productController.listAll);

export default productRouter;
