const express = require('express');

const router = express.Router();

const { salesController } = require('../controllers');
const checkSales = require('../middlewares/checkSales');

router.get('/', salesController.findAll);
router.get('/:id', salesController.findById);
router.post('/',
  checkSales,
  salesController.insert);

module.exports = router;