var express = require('express');
var router = express.Router();

var orderItem = require('./orderItemSchema');

router.get('/', (req, res, next) => {
    orderItem.populate('order').find((err, orderItems) => {
        if (err) {
            return res.json(err)
        }
        else {        
          var returnResult = [];
            orderItems.forEach(function(orderItem)
            {
               returnResult.push({
                "id": orderItem._id,
                "grade": orderItem.grade,
                "sellingPrice": orderItem.sellingPrice,
                "sellingQuantity": orderItem.sellingQuantity,
                "sellingCartons": orderItem.sellingCartons,
                "buyingPrice":orderItem.buyingPrice,
                "buyingQuantity":orderItem.buyingQuantity,
                "buyingCartons": orderItem.buyingCartons,
                "order":orderItem.order.id
                })
            })
            return res.status(200).json(returnResult);   
        }
    });
});

router.post('/', (req, res, next) => {
    let neworderItem = new orderItem({
        
        grade: req.body.grade,
        sellingPrice: req.body.sellingPrice,
        sellingQuantity: req.body.sellingQuantity,
        sellingCartons: req.body.sellingCartons,
        buyingPrice: req.body.buyingPrice,
        buyingQuantity: req.body.buyingQuantity,
        buyingCartons: req.body.buyingCartons,
        order:req.body.order
    });
    neworderItem.save((err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        else {
            return res.status(200).json(result);
        }
    });
});

module.exports = router;
