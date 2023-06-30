// import { ProductSequelizeModel } from '../../src/database/models/product.model';

// import ProductModel from "../../src/database/models/product.model";

// import { ServiceResponseSuccess } from '../../src/types/ServiceResponse';
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

const productListReturned = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 4,
    "name": "Armadura de Aquiles",
    "price": "1 peça de ouro",
    "orderId": 2
  },
  {
    "id": 5,
    "name": "Harpa de Dagda",
    "price": "15 peças de ouro",
    "orderId": 3
  },
  {
    "id": 6,
    "name": "Arco Escudo Invejável",
    "price": "3 Gemas da Noite",
    "orderId": 4
  },
  {
    "id": 7,
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
  }
] 
const productId = 1;
const productIdArray = [1, 2];
const orderId = 1;
const productUpdateParameters = {
  productIdArray,
  orderId,
}

// const buildedMock = productListReturned.forEach(product => {
//   ProductModel.build(product);
// });

export default {
  newProduct,
  productCreated,
  createProductServiceResponse,
  productListReturned,
  productUpdateParameters,
  productId,
};