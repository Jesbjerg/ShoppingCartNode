const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true
    },
    Price: {
      type: Number,
      required: true,
      trim: true
    },
    Description: {
      type: String,
      required: false,
      trim: true
    },
    Category: {
      type: String,
      enum: ['Dairy', 'General', 'Spice', 'Vegetable', 'Meat', 'Fruit', 'Carbs'],
      required: true,
      trim: true
    },
    Quantity: {
      type: Number,
      required: true,
      min: 1
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
