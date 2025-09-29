const express = require("express");
const app = express();
const path = require("path");
const fs = require ("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    fs.readdir("./hisaab", function(err, files){
        res.render("index" , {files: files})
    })
    
});

app.get("/edit", (req, res)=>{
    res.render("edit")
});

app.post("/create", (req, res)=>{
    res.render("create")
});

app.get("/show", (req, res)=>{
    res.render("show")
});

app.listen(3000);