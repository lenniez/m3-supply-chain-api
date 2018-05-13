'use-strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
  category: String, // 'shoes', as in the key in ../config/category
  supplier: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  photoUrl: String,
  subComponents: [{
    subComponentName: String,
    subSupplierName: String,
    photoUrl: String
  }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
