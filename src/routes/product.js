const express = require('express');
const validate = require('../middlewares/validate');
const productValidation = require('../validations/product');
const productController = require('../controllers/product');

const router = express.Router();

router
  .route('/')
  .post(validate(productValidation.), productController.createProduct)
  .get(validate(productValidation.getUsers), productController.getProducts);

router
  .route('/:userId')
  .get(validate(productValidation.getProduct), productController.getProductById)
  .put(validate(productValidation.updateProduct), productController.updateProductById)
  .delete(validate(productValidation.deleteProduct), productController.deleteproductById);

router.route('/category/:categoryId').get(validate(productValidation.createUser), productController.getProductByCategory);
