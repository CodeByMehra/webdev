const express = require("express");
const app = express();
const path = require("path");
const fs = require ("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))

const {userModel, validateModel} = require("./models/user-model")

app.get("/", function(req, res){
    res.send("working");
})


app.listen(3000);