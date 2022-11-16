const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  PRODUCT_ERROR: 422,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
