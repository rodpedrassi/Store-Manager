const { salesService } = require('../services');
const { errorMap } = require('../utils/errorMap');

const insert = async (req, res) => {
  const sale = req.body;
  const { type, message } = await salesService.insert(sale);

  if (type) return res.status(errorMap[type]).json({ message });

  res.status(201).json(message);
};

module.exports = {
  insert,
};