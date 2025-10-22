// models/user.js

// 1. Import dependencies
const mongoose = require('mongoose');
const Joi = require('joi');

// 2. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/joitestdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// 3. Define Mongoose schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// 4. Create Mongoose model
const userModel = mongoose.model("User", userSchema);

// 5. Joi validation function
function validateUser(data) {
    const schema = Joi.object({
        username: Joi.string().min(3).required(),
        name: Joi.string().min(3).required(),
        age: Joi.number().min(18).required(),
        contact: Joi.number().required(),
        email: Joi.string().email().required()
    });

    return schema.validate(data);
}

// 6. Export model and validation
module.exports = {
    userModel,
    validateUser
};
