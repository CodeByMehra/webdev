const express = require('express');
const app = express();
const userModel = require("./models/user");
const debuglog = require("debug")("development:app")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongooseconnection = require('./config/mongoose');

app.get("/",function(req,res,next){
    res.send("hey")
});

app.get("/users",async function(req,res,next){
    let users=await userModel.find();
    console.log(users);
    res.send(users);
});

app.post("/create", async function(req, res, next){
    let {name, email, password, username} = req.body;

    let createduser = await userModel.create({
        name,
        username,
        email,
        password
    });

    res.send(createduser);
});

app.get("/update",async function(req,res,next){
    let user = await userModel.findOneAndUpdate({name: "vishal"}, {name: "Vishal Mehra"}, {new:true})
    res.send(user);
});

app.get("/read",async function(req,res,next){
    let users = await userModel.findOne();
    debuglog(" readed");
    res.send(users);
});

app.get("/delete",async function(req,res,next){
    let users = await userModel.findOneAndDelete({name: "vishal"});
    res.send(users);
});

app.listen(3000);