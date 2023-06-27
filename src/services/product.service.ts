import ProductModel, {
  ProductInputtableTypes, 
  ProductSequelizeModel, 
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponseSuccess } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): Promise<ServiceResponseSuccess<Product>> {
  const createProduct = await ProductModel.create(product);

  return {
    status: 'ok',
    data: createProduct.dataValues,
  };
}
async function listAll(): Promise<ServiceResponseSuccess<ProductSequelizeModel[]>> {
  const listProducts = await ProductModel.findAll();

  return {
    status: 'ok',
    data: listProducts,
  };
}

export default {
  create,
  listAll,
};