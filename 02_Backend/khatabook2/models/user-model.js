const mongoose = require("mongoose");
const { number } = require("joi");
mongoose.connect("mongodb:127.0.0.1:27017/joitestdb"); 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        required: true
    },
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: string,
        required: true
    }
})

module.exports = module.exports("User", userSchema)