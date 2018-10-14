
var express = require('express');

var app = express();

var orders = require('../orders/api');
var orderItem = require('../orderItem/api');


app.use('/orders', orders); 
app.use('/orderItems',orderItem)


module.exports = app;