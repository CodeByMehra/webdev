const express = require('express');
const app = express();
const userModel = require("./models/user");

const mongooseconnection = require('./config/mongoose');

app.get("/",function(req,res,next){
    res.send("hey")
});

app.listen(3000);