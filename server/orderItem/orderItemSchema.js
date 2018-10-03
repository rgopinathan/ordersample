var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const orderItemSchema = mongoose.Schema({
    id :{
        type: String,
        required: true   
      },
    grade:{
        type: String,
        required: true  
    },
    sellingPrice:{
        type: Number,
        required: true  
    },
    sellingQuantity:{
        type: Number,
        required: true  
    },
    sellingCartons:{
        type: Number,
        required: true  
    },
    buyingPrice:{
        type: Number,
        required: true  
    },    
    buyingQuantity:{
        type: Number,
        required: true  
    },
      buyingPrice:{
        type: Number,
        required: true  
    }

});

module.exports = mongoose.model('orderItem',orderItemSchema);