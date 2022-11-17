const { salesModel } = require('../models');
const validateSales = require('./validations/validateSales');

const insert = async (sales) => {
  const error = validateSales.validateNewProduct(sales);
  if (error.message) return { type: 'SALES_ERROR', message: error.message };
  
  const allProducts = await Promise.all(sales.map(async (sale) => {
    const product = await validateSales.productIdExists(sale.productId);
    return product;
  }));

  if (allProducts.includes(undefined)) {
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  const insertId = await salesModel.insertSales();

  await Promise.all(sales.map(async (sale) => {
    await salesModel.insertSalesProduct(insertId, sale);
  }));

  return { type: null, message: { id: insertId, itemsSold: sales } };
};

module.exports = {
  insert,
};