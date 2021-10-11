const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true
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
    },
    Img: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', productSchema, 'Products');
