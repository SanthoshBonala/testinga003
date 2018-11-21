/* Author : Mehar
 */
const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

    _id: { type: Number, required : true },
    firstName: {
        type : String,
        required : true,
        default: 'First Name',
    },
    lastName: {
        type: String,
        required: true,       
        default: 'Last Name', 
    },              
    mobileNumber: {
        type: Number,
        required: true,          
        default : 0000000000,
        max: 10,
    },
    emailID: {
        type: String,
        required: true,
        default: 'abc@gmail.com',
    },
    address: {
        type: String,
        required: true,      
        min: 4,
        max: 100, 
        deault: "abcde",   
    }
})
module.exports = mongoose.model('Customer', CustomerSchema)