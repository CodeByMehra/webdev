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

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./hisaab/${req.params.filename}`, "utf-8", function(err, data) {
    if(err) res.send(err);
    res.render("edit", {filedata : data, filename : req.params.filename})
  })
});

app.post("/update/:filename", (req, res) => {
    const filename = req.params.filename;
    const newData = req.body.details;  

    if (!newData) {
        return res.send("No data received!");
    }

    const filepath = path.join(__dirname, "hisaab", filename);

    fs.writeFile(filepath, newData, (err) => {
        if (err) {
            return res.send("Error saving file: " + err.message);
        }
        res.redirect("/");
    });
});

app.get("/create", function (req, res) {
  res.render("create");
});

app.post("/createhisaab", function (req, res) {
  var currentDate = new Date();
  var date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
  fs.writeFile(`./hisaab/${date}`, req.body.content, function (err) {
    if (err) return res.status(500).send(err);
    res.redirect("/");
  });
});

app.get("/hisaab/:filename", (req, res)=>{ //correct it...
    const filename = req.params.filename;               
    const filepath = path.join(__dirname, "hisaab", filename);
    const filedata = req.body.details;

    res.render("show" ,  {filedata : data, filename : req.params.filename})
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./hisaab/${req.params.filename}`, function(err) {
    if(err) res.send(err);
    res.redirect("/")
  })
});

app.listen(3000);