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
  const { message } = await findById(insertId);
  return { type: null, message };
};

const updateById = async (id, name) => {
  const error = validateNewProduct({ name });
  if (error.type) return error;
  const { affectedRows } = await productModel.updateById(Number(id), name);
  if (affectedRows === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: { id, name } };
};

const deleteById = async (id) => {
  const { affectedRows } = await productModel.deleteById(Number(id));
  if (affectedRows === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: { id } };
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};