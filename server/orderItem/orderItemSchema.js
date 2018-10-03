var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const orderItemSchema = mongoose.Schema({

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
    buyingCartons:{
        type: Number,
        required: true  
    },
    order:{
        type: Schema.Types.ObjectId, ref: "order",
        
    }

});

module.exports = mongoose.model('orderItem',orderItemSchema);