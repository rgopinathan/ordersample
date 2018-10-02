var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ordersSchema = mongoose.Schema({
    id :{
        type: String,
        required: true   
      },
    OrderNumber:{
        type: String,
        required: true  
    },
    PINumber:{
        type: String,
        required: true  
    },
    Type:{
        type: String,
        required: true  
    },
    Packer:{
        type: String,
        required: true  
    },    
    Buyer:{
        type: String,
        required: true  
    },
    PackDate:{
        type: Date,
        required: true  
    },
    DeliveryDate:{
        type: Date,
        required: true  
    },
    Status:{
        type: String,
        required: true  
    }
});

module.exports = mongoose.model('order',ordersSchema);