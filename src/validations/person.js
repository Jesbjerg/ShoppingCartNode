const Joi = require('joi');
const { objectId } = require('./custom');

const createProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    Price: Joi.number.required(),
    Description: Joi.string().required(),
    Category: Joi.string().required().valid('Dairy', 'General', 'Spice', 'Vegetable', 'Meat', 'Fruit', 'Carbs'),
    Quantity: Joi.number().required().min(1)
  })
};

const getProductById = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId)
  })
};

const getProductByCategory = {
  params: Joi.object().keys({
    category: Joi.string().required().valid('Dairy', 'General', 'Spice', 'Vegetable', 'Meat', 'Fruit', 'Carbs')
  })
};

const updateProductById = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId)
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    Price: Joi.number.required(),
    Description: Joi.string().required(),
    Category: Joi.string().required().valid('Dairy', 'General', 'Spice', 'Vegetable', 'Meat', 'Fruit', 'Carbs'),
    Quantity: Joi.number().required().min(1)
  })
};

const deleteProductById = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId)
  })
};

module.exports = {
  createProduct,
  getProductById,
  getProductByCategory,
  updateProductById,
  deleteProductById
};
