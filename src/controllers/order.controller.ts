import { Request, Response } from 'express';
import orderService from '../services/order.service';
import userService from '../services/user.service';

async function listAll(req: Request, res: Response) {
  try {
    const listedOrders = await orderService.listAll();

    return res.status(200).json(listedOrders.data);
  } catch (error) {
    console.log(error);
    // return res.status(500).json(error.message);
  }
}

async function create(req: Request, res: Response) {
  try {    
    const { userId, productIds } = req.body;

    const verifyUser = await userService.findOne(userId);

    if (!verifyUser) {
      return res.status(404).json({ message: '"userId" not found' });
    }
    const createdOrder = await orderService.create({ productIds, userId });

    if (!createdOrder) {
      return res.status(500).json({ message: 'Algo de errado ocorreu' });
    }

    return res.status(201).json({ userId, productIds });
  } catch (error) {
    console.log(error);
    // return res.status(500).json(error.message);
  }
}

export default {
  listAll,
  create,
};