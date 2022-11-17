const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');
const checkSales = require('../middlewares/checkSales');

router.post('/',
  checkSales,
  salesController.insert);

module.exports = router;