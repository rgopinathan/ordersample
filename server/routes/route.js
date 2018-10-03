
var express = require('express');

var app = express();

var orders = require('../orders/api');
var orderItem = require('../orderItem/api');


app.use('/orders', orders); 
app.use('/orderItem',orderItem)


module.exports = app;