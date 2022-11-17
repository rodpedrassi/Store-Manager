const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const insertProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});
  
const itemSaleSchema = Joi.object({
  productId: idSchema,
  quantity: idSchema,
});

const insertSalesSchema = Joi.array().items(itemSaleSchema);

module.exports = {
  idSchema,
  insertProductSchema,
  insertSalesSchema,
};