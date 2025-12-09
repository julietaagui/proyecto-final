import { Router } from 'express';
import * as productsController from '../controllers/products.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';


const router = Router();


// GET /api/products -> devuelve todos los productos
router.get('/', productsController.getAllProducts);


// GET /api/products/:id -> devuelve producto por id
router.get('/:id', productsController.getProductById);


// POST /api/products/create -> crea producto (protegido)
router.post('/create', authenticate, productsController.createProduct);


// DELETE /api/products/:id -> elimina producto (protegido)
router.delete('/:id', authenticate, productsController.deleteProduct);


export default router;