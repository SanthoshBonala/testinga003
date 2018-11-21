/* 
Author: KRISHNA TEJA
 */
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  productName: {
    type: String,
    required: true,
    unique: true,
    default: 'product'
  },
  productDescription: {
    type: String,
    required: false,
    default: 'description'
  },
  productPrice: {
    type: Number,
    required: true,
    default: 5.00,
    min: 0,
    max: 100000
  },
  productCategory: {
    type: String,
    required: false,
    default: 'category'
  }
})
module.exports = mongoose.model('Product', ProductSchema)
