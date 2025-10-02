const express = require('express');
const app = express();

const mongooseconnection = require('./config/mongoose');

app.get("/",function(req,res,next){
    res.send("heyy")
});

app.listen(3000);