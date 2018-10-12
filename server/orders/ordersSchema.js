var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ordersSchema = mongoose.Schema({
    RSSNumber:{
        type: String,
       
    },
    OrderNumber:{
        type: String,
        
    },
    PINumber:{
        type: String
          
    },
    Type:{
        type: String,
        required: true  
    },
    Packer:{
        type: String,
         
    },    
    Buyer:{
        type: String,
          
    },
    PackDate:{
        type: Date
        
    },
    DeliveryDate:{
        type: Date
        
    },
    Status:{
        type: String
        
    }
});

module.exports = mongoose.model('order',ordersSchema);