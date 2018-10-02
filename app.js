var express  = require('express');
var mongoose  = require('mongoose');
var bodyparser  = require('body-parser');
//var cors  = require('cors');
var path = require('path');

var app = express();

const route = require('./server/routes/route');

const port = 3000;

//app.use(cor());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);


app.get('/',(req,res)=>{

})

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});