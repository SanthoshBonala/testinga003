// Mongoose model for E-commerce project
// Group: 6-01
// Author: Jeremiah White <white@nwmissouri.edu>

const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    _id: {type: Number, required: true},
    email: {
        type: String,
        required: true
    },
    datePlaced: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateShipped: {
        type: Date,
        required: false
    },
    paymentType: {
        type: String,
        enum: ['no selection', 'credit card', 'cash', 'check'],
        required: true,
        default: 'no selection'
    },
    amountDue: {
        type: Number,
        required: true,
        default : 0.00
    },
    paid: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('Order', OrderSchema)