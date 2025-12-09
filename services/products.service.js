import * as productsModel from '../models/products.model.js';


export const getAll = async () => {
return await productsModel.getAllProducts();
};


export const getById = async (id) => {
return await productsModel.getProductById(id);
};


export const create = async (data) => {
return await productsModel.createProduct(data);
};


export const remove = async (id) => {
return await productsModel.deleteProduct(id);
};