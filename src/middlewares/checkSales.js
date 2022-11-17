module.exports = (req, res, next) => {
  const sales = req.body;
  
  for (let i = 0; i < sales.length; i += 1) {
    if (sales[i].productId === undefined) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (sales[i].quantity === undefined) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  }

  return next();
};
