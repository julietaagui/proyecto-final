import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res, next) => {
try {
const products = await productsService.getAll();
res.json(products);
} catch (err) {
next(err);
}
};

export const getProductById = async (req, res, next) => {
try {
const { id } = req.params;
const product = await productsService.getById(id);
if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
res.json(product);
} catch (err) {
next(err);
}
};

export const createProduct = async (req, res, next) => {
try {
const data = req.body;
if (!data.name || !data.price) return res.status(400).json({ message: 'Faltan campos obligatorios' });
const created = await productsService.create(data);
res.status(201).json(created);
} catch (err) {
next(err);
}
};

export const deleteProduct = async (req, res, next) => {
try {
const { id } = req.params;
const deleted = await productsService.remove(id);
if (!deleted) return res.status(404).json({ message: 'Producto no encontrado' });
res.json({ message: 'Producto eliminado correctamente' });
} catch (err) {
next(err);
}
};