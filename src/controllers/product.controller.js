const { productService } = require('../services');

const errorMap = require('../utils/errorMap');

const findAll = async (_req, res) => {
  const { type, message } = await productService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productService.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const newProduct = req.body; 
  const { type, message } = await productService.insert(newProduct);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  
  return res.status(201).json(message);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productService.updateById(Number(id), name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const deleteById = async (req, res) => { 
  const { id } = req.params;
  const { type, message } = await productService.deleteById(Number(id));
  
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(204).json(message);
};

module.exports = {
  findAll,
  findById,
  insert,
  updateById,
  deleteById,
};