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

function validateModel(data){
    Joi.object({
        username: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        email: Joi.email().required(),
        age: Joi.number().min(18).required(),
        contact: Joi.number().required()
    })
    Schema.validate(data)
}

module.exports = module.exports("User", userSchema)