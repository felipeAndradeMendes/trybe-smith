import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponseSuccess } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponseSuccess<Product>> {
  const createProduct = await ProductModel.create(product);

  return {
    status: 'ok',
    data: createProduct.dataValues,
  };
}

export default {
  create,
};