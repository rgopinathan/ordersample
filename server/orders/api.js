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
                "RSSNumber":order.RSSNumber,
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

router.get('/:id', function(req, res)  {
    console.log(req.params.id);
    order.findById(req.params.id,function(err,result){
        
        if (err) {
            res.json(err)
        }
        else {
            var returnResult = {
                "id" : result._id,
                "RSSNumber":result.RSSNumber,
                "OrderNumber": result.OrderNumber,
                "PINumber": result.PINumber,
                "Type": result.Type,
                "Packer": result.Packer,
                "Buyer":result.Buyer,
                "PackDate":result.PackDate,
                "DeliveryDate": result.DeliveryDate,
                "Status": result.Status
            };
            return res.status(200).json(returnResult);   
           
        }
    });
});

router.post('/', (req, res, next) => {
    let newOrder = new order({
        RSSNumber:req.body.RSSNumber,
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
