import { Request, Response } from 'express';
import productService from '../services/product.service';

async function create(req: Request, res: Response) {
  try {
    const createProduct = await productService.create(req.body);

    return res.status(201).json(createProduct.data);
  } catch (error) {
    // console.log(error: unknown);
    // return res.status(500).json(error.message);
  }
}

async function listAll(req: Request, res: Response) {
  try {
    const lisProducts = await productService.listAll();

    return res.status(200).json(lisProducts.data);
  } catch (error) {
    console.log(error);
    // return res.status(500).json(error.mesage);
  }
}

export default {
  create,
  listAll,
};