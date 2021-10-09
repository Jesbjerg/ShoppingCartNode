const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const products = async () => {
  return Product.find();
};

const getProductById = async (productId) => {
  const product = await Product.findOne({ _id: productId });
  return product;
};

const getProductsByCategory = async (category) => {
  return Product.find({ category: { category } });
};

const createProduct = async (productBody) => {
  const createdProduct = await Product.create(productBody);
  return createdProduct;
};

const updateProductById = async (productId, updateBody) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  Object.assign(product, updateBody);
  await product.save();
  return product;
};

const deleteproductById = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  products,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProductById,
  deleteproductById
};
