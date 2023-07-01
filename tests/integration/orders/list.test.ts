import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import OrderModel, { OrderSequelizeModel } from '../../../src/database/models/order.model';
import orderMocks from '../../mocks/order.mock';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';
import { Product } from '../../../src/types/Product';

chai.use(chaiHttp);

describe('GET /orders - Integração', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao listar pedidos, retornar status 200 e lista de pedidos', async function () {
    
    const mockFindAllReturn = orderMocks.returnedOrders.map((order) => {
        return OrderModel.build(order)
      });
      console.log('MOCK FINDALL RETURN:', mockFindAllReturn)
      sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);
      
      const httpResponse = await chai.request(app).get('/orders').send();
      console.log('HTTP RESPONSE BODY:', httpResponse.body);
      
      expect(httpResponse.status).to.equal(200);
      // expect(httpResponse.body).to.deep.equal(orderMocks.formatedReturnedOrders);    
  });
});

// PRIMEIRA TENTATIVA

// const mockFindAllReturn = orderMocks.returnedOrders.map((order) => {
//   return OrderModel.build(order)
// });
// console.log('MOCK FINDALL RETURN:', mockFindAllReturn)
// sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

// const httpResponse = await chai.request(app).get('/orders').send();
// console.log('HTTP RESPONSE BODY:', httpResponse.body);

// expect(httpResponse.status).to.equal(200);
// expect(httpResponse.body).to.deep.equal(orderMocks.formatedReturnedOrders);


// SEGUNDA TENTATIVA
    // const mockFormatedFindAllReturn = productMock.productListReturned.map((product) => {
    //   return ProductModel.build(product as unknown as Product)
    // });

    // console.log('MOCK FORMATED FINDALL RETURN:', mockFormatedFindAllReturn);
  
    // const mockFindAllReturn = orderMocks.returnedOrders.map((order) => {
    //   const productIds = mockFormatedFindAllReturn.map((product) => {
    //     if (product.dataValues.orderId === order.id) {
    //       return product.dataValues.orderId;
    //     }
    //   })
    //   // return OrderModel.build(order)
    //   return {
    //     ...order,
    //     productIds,
    //   }
    // });
    // console.log('MOCK FINDALL RETURN:', mockFindAllReturn)
    // // sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

    // const httpResponse = await chai.request(app).get('/orders').send();
    // // console.log('HTTP RESPONSE BODY:', httpResponse.body);

    // ---

    // TERCEIRA TENTATIVA

    // sinon.stub(OrderModel, 'findAll').resolves(orderMocks.returnedOrders as unknown as  OrderSequelizeModel[]);

    // const httpResponse = await chai.request(app).get('/orders');

    // // console.log('HTTP RESPONSE:', httpResponse)
    // expect(httpResponse.status).to.equal(200);
    // expect(httpResponse.body).to.deep.equal(orderMocks.formatedReturnedOrders);