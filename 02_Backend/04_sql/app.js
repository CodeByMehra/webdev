const express = require('express');
const app = express();
const userModel = require("./models/user");
const debuglog = require("debug")("development:app")

const mongooseconnection = require('./config/mongoose');

app.get("/",function(req,res,next){
    res.send("hey")
});

app.get("/create",async function(req,res,next){
    let createdUser = await userModel.create({
        username: "vishalmhra", 
        name: "vishal",
        email: "v@gmail.com",
        password: "vish1122"
    })
    debuglog("user created");
    res.send(createdUser);
});

// app.get("/read",async function(req,res,next){
//     let users = await userModel.findOne();
//     debuglog("readed");
//     res.send(users);
// });

app.listen(3000);