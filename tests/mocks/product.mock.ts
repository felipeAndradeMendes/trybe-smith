const newProduct = {
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}

const productCreated = {
  "id": 7,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
}

const createProductServiceResponse = {
  status: 'ok',
  data: productCreated,
}

export default {
  newProduct,
  productCreated,
  createProductServiceResponse,
};