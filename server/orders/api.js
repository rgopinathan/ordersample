var express = require('express');
var router = express.Router();

var order = require('./ordersSchema');

router.get('/', (req, res, next) => {
    order.find((err, orders) => {
        if (err) {
            return res.json(err)
        }
        else {        
          var returnResult = [];
            orders.forEach(function(order)
            {
               returnResult.push({
                "id": order._id,
                "OrderNumber": order.OrderNumber,
                "PINumber": order.PINumber,
                "Type": order.Type,
                "Packer": order.Packer,
                "Buyer":order.Buyer,
                "PackDate":order.PackDate,
                "DeliveryDate": order.DeliveryDate,
                "Status": order.Status
                })
            })
            return res.status(200).json(returnResult);   
        }
    });
});

router.post('/', (req, res, next) => {
    let newOrder = new order({
        OrderNumber: req.body.OrderNumber,
        PINumber: req.body.PINumber,
        Type: req.body.Type,
        Packer: req.body.Packer,
        Buyer: req.body.Buyer,
        PackDate: req.body.PackDate,
        DeliveryDate: req.body.DeliveryDate,
        Status: req.body.Status
    });
    newOrder.save((err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).json(result);
        }
    });
});

module.exports = router;
