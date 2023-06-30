import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
});

const orderSchema = Joi.object({
  productIds: Joi.array().items(Joi.number().integer().prefs({ convert: false })).min(1).required(),
  userId: Joi.number().prefs({ convert: false }).required(),
});

export default {
  productSchema,
  orderSchema,
};