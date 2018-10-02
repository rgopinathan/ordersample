
var express = require('express');

var app = express();

var orders = require('./orders/api');


app.use('/orders', orders); 


module.exports = app;