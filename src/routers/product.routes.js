import Router from 'express';
import {
    createProduct,
    deleteProducts,
    getAllProduct,
    getProductById,
    updateProduct,
} from '../controllers/product.controller.js';
import { productSchema } from '../schema/productSchema.js';
import validBodyRequest from '../utils/validBodyRequest.js';

const productRouter = new Router();

productRouter.get('/', getAllProduct);
productRouter.get('/:id', getProductById);
productRouter.patch('/:id',validBodyRequest(productSchema), updateProduct);
productRouter.delete('/:id', deleteProducts);
productRouter.post('/', createProduct);

export default productRouter;
