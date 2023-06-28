import express from 'express';
import productRouter from './routers/product.router';
import orderRouter from './routers/order.router';
import loginRouter from './routers/login.router';

const app = express();

app.use(express.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;

// PARA TESTAR A ORDER, FAZER TB O BUILD DA MODEL PRODUCTS QUE É USADA COMO PARTE DO RETORNO DA ORDER
// IMPLEMENTAR NA CONST QUE FEZ A BUILD DA ORDER TB A BILD DO PRODUTO