const { salesService } = require('../services');
const { errorMap } = require('../utils/errorMap');

const findAll = async (_req, res) => {
  const { type, message } = await salesService.findAll();

  if (type) return res.status(errorMap[type]).json(message);

  res.status(200).json(message);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await salesService.findById(id);

  console.log('CONTROLER', type, message);

  if (type) return res.status(errorMap[type]).json({ message });

  return res.status(200).json(message);
};

const insert = async (req, res) => {
  const sale = req.body;
  const { type, message } = await salesService.insert(sale);

  if (type) return res.status(errorMap[type]).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insert,
  findAll,
  findById,
};