const { productModel } = require('../../models');
const { insertSalesSchema } = require('./schema');

const validateNewProduct = (product) => {
  const { error } = insertSalesSchema.validate(product);
  if (error) {
    return {
      type: 'INVALID_VALUE', message: '"quantity" must be greater than or equal to 1',
    }; 
}
  return { type: null, message: '' };
};

const productIdExists = async (productId) => {
  // const { error } = idSchema.validate(productId);
  // if (error) return { type: 'ID_ERROR', message: '"productId" must be a positive number' };

  const product = await productModel.findById(productId);
  // console.log('dentro de id exists', product);
  if (!product) return undefined;

  return product;
};

module.exports = {
  validateNewProduct,
  productIdExists,
};