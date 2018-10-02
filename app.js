var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var route = require('./server/routes/route');


var app = express();

const port = process.env.PORT ||3000;

const mongourl = process.env.MONGO_URL || 'mongodb://localhost:27017/orderManagement';

mongoose.connect(mongourl);

mongoose.connection.on('connected',()=>
{
    console.log('mongodb connected @ 27017');
})

mongoose.connection.on('error',(err)=>{
    console.log(err);
})

app.use(bodyParser.json());

app.use('/api',route);

app.use(express.static(path.join(__dirname, 'dist')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'dist/index.html'));
//     });
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
    });


app.listen(port,()=>{
    console.log('Server started @ :'+port);
})