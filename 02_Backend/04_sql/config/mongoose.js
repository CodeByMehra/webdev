const mongoose = require(`mongoose`);
const debuglog = require("debug")("development:mongooseconfig:")
mongoose.connect("mongodb://localhost:27017/testingdb");

const db = mongoose.connection;

db.on("error", function(err){
    debuglog(err)
});

db.on("open", function(){
    debuglog("Connected to the database")
});

module.exports= db;