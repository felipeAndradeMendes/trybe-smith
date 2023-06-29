import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { CreateOrderParameter, NewOrder, Order } from '../types/Order';
import { ServiceResponseSuccess } from '../types/ServiceResponse';
import productService from './product.service';

async function listAll(): Promise<ServiceResponseSuccess<NewOrder[]>> {
// async function listAll(): Promise<ServiceResponseSuccess<OrderSequelizeModel[]>> {
  const listedOrders = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: ['id'],
    },
  });

  // console.log('LISTED ORDERS:', listedOrders);
  const adaptList = listedOrders.map((order) => {
    const prodIds = order.dataValues.productIds?.map((item) => item.id);

    const newOrder = {
      id: order.dataValues.id,
      userId: order.dataValues.userId,
      productIds: prodIds,

    };
    return newOrder;
  });
  // console.log('ADAPT LIST:', adaptList);

  return { status: 'ok', data: adaptList };
  // return { status: 'ok', data: listedOrders };
}

async function create({ productIds, userId }: 
CreateOrderParameter): Promise<ServiceResponseSuccess<Order> | undefined> { 
  const addOrder = await OrderModel.create({ productIds, userId });
  // console.log('ADD Orders:', addOrder);
  // console.log('Product ids:', productIds);

  await productService.updateProducts(productIds, addOrder.dataValues.id);
  // console.log('UPDATE PRODUCTS:', updateProducts);
  return {
    status: 'ok',
    data: addOrder.dataValues,
  };
}

export default {
  listAll,
  create,
};