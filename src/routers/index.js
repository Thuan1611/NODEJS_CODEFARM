import Router from 'express';
import productRouter from './product.routes.js';
const router = new Router();

router.use('/products', productRouter);
export default router;
