var express = require('express');
var router = express.Router();

var orderItem = require('./orderItemSchema');

router.get('/:orderId', (req, res, next) => {
    if(req.params.orderId){
        orderItem.find({ orderId: req.params.orderId }, (err, orderItems) => {
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
                    "buyingCartons": orderItem.buyingCartons
                    })
                })
                return res.status(200).json(returnResult);   
            }
        });
    } else {
        return res.status(400).send("Missing order id");
    }
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    let neworderItem = new orderItem({        
        grade: req.body.grade,
        sellingPrice: req.body.sellingPrice,
        sellingQuantity: req.body.sellingQuantity,
        sellingCartons: req.body.sellingCartons,
        buyingPrice: req.body.buyingPrice,
        buyingQuantity: req.body.buyingQuantity,
        buyingCartons: req.body.buyingCartons,
        orderId:req.body.orderId
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
