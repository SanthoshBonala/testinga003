//Suresh Peddinti
const mongoose = require('mongoose')

const orderLineItemsSchema = new mongoose.Schema({

  orderLine_id: { type: Number, required: true },
  order_id: {
    type: Number,
    required: true,
    default: 0
  },
  product_id: {
    type: Number,
    required: true,
    default: 0
  },
  lineNo: {
    type: Number,
    required: true,
    default: 1,
  },
  orderQuantity: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 100000
  }
})
module.exports = mongoose.model('orderLineItems', orderLineItemsSchema)
