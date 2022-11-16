const { productModel } = require('../models');

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
  const newProduct = await productModel.insert(product);
  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  insert,
};