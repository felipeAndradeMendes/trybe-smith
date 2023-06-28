import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { NewOrder } from '../types/Order';
import { ServiceResponseSuccess } from '../types/ServiceResponse';

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
  console.log('ADAPT LIST:', adaptList);

  return { status: 'ok', data: adaptList };
  // return { status: 'ok', data: listedOrders };
}

export default {
  listAll,
};