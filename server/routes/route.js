const express = require('express');
const router = express.Router();

router.get('/orders',(req,res,next)=>{
    res.send('order list');
});

router.get('/order/:id',(req,res,next)=>{
    res.send('order item');
});

module.exports = router;