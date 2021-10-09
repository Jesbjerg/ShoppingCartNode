const express = require('express');
const validate = require('../middlewares/validate');
const productValidation = require('../validations/person');
const productController = require('../controllers/product');

const router = express.Router();

router
  .route('/')
  .post(validate(productValidation.createProduct), productController.createProduct)
  .get(productController.getProducts);

router
  .route('/:userId')
  .get(validate(productValidation.getProductById), productController.getProductById)
  .put(validate(productValidation.updateProductById), productController.updateProductById)
  .delete(validate(productValidation.deleteProductById), productController.deleteproductById);

router
  .route('/category/:category')
  .get(validate(productValidation.getProductByCategory), productController.getProductByCategory);
