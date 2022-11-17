const express = require('express');

const router = express.Router();

const productController = require('../controllers/product.controller');
const checkProducts = require('../middlewares/checkProducts');

router.get('/', productController.findAll);
router.get('/:id', productController.findById);

router.put('/:id',
  checkProducts,
  productController.updateById);

router.post('/',
  checkProducts,
  productController.insert);

module.exports = router;