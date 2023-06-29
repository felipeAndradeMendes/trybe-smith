import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
});

const orderSchema = Joi.object({
  productIds: Joi.array().items(Joi.number()).required(),
  userId: Joi.number().required(),
});

export default {
  productSchema,
  orderSchema,
};