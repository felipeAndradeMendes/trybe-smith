import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function listAll(req: Request, res: Response) {
  try {
    const listedOrders = await orderService.listAll();

    return res.status(200).json(listedOrders.data);
  } catch (error) {
    console.log(error);
    // return res.status(500).json(error.message);
  }
}

export default {
  listAll,
};