import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductById);

router.post('/create', authenticate, productsController.createProduct);

router.delete('/:id', authenticate, productsController.deleteProduct);

export default router;