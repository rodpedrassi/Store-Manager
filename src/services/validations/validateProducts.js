const { insertProductSchema } = require('./schema');

const validateNewProduct = (product) => {
  const { error } = insertProductSchema.validate(product);
  if (error) {
    return {
      type: 'INVALID_VALUE', message: '"name" length must be at least 5 characters long',
    }; 
}
  return { type: null, message: '' };
};

module.exports = {
  validateNewProduct,
};