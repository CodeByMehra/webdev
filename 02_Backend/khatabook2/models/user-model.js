const mongoose = require("mongoose");
const { number } = require("joi");
mongoose.connect("mongodb:127.0.0.1:27017/joitestdb"); 
const userSchema = mongoose.Schema({
    username : string,
    name : string,
    age : number,
    contact : number,
    email : string,
})

module.exports = module.exports("User", userSchema)