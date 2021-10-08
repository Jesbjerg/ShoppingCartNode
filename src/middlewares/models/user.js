const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
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

const User = mongoose.model('User', userSchema);

module.exports = User;
