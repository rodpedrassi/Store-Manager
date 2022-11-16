const { productModel } = require('../models');
const { validateNewProduct } = require('./validations/validateProducts');

const findAll = async () => {
  const products = await productModel.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const products = await productModel.findById(id);
  if (!products) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: products };
};

const insert = async (product) => {
  const error = validateNewProduct(product);
  if (error.message) return { type: 'PRODUCT_ERROR', message: error.message };
  const insertId = await productModel.insert(product);
  const newProduct = await findById(insertId);
  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  insert,
};