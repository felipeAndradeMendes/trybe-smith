import ProductModel, {
  ProductInputtableTypes, 
  ProductSequelizeModel, 
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ProductIds } from '../types/Order';
import { ServiceResponseSuccess } from '../types/ServiceResponse';

async function create(product: ProductInputtableTypes): 
Promise<ServiceResponseSuccess<Product>> {
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

async function updateProducts(productIds: ProductIds[], orderId: number): 
Promise<ServiceResponseSuccess<string> | undefined> {
  const productPromises = productIds.map((prodId) => ProductModel.update(
    { orderId },
    { where: { id: prodId } },
  )); 
  await Promise.all(productPromises);
  // console.log('PRODUCT PROMISES:', productPromises);

  return {
    status: 'ok',
    data: 'Product updated',
  };
}

export default {
  create,
  listAll,
  updateProducts,
};