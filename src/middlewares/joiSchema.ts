import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
});

// const errorCodes = {
//   400: '"name" is required',
// };

// const chooseError = (msg) => {

// };

export default {
  productSchema,
};