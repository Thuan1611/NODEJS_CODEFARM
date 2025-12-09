import Router from 'express';
import {
    createProduct,
    deleteProducts,
    getAllProduct,
    getProductById,
    updateProduct,
} from '../controllers/product.controller.js';

const productRouter = new Router();

productRouter.get('/', getAllProduct);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProducts);
productRouter.post('/', createProduct);

export default productRouter;
