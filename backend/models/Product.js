const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  category: {
    type: String,
    enum: ['Mobile', 'Charger', 'Screen Guard', 'Cable', 'Other'],
    required: true
  },
  brand: {
    type: String,
    trim: true
  },
  model: {
    type: String,
    trim: true
  },
  imei: {
    type: String,
    trim: true,
    unique: true,
    sparse: true
  },
  costPrice: {
    type: Number,
    required: [true, 'Please provide cost price']
  },
  sellingPrice: {
    type: Number,
    required: [true, 'Please provide selling price']
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  minStock: {
    type: Number,
    default: 5
  },
  description: String,
  barcode: {
    type: String,
    unique: true,
    sparse: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
