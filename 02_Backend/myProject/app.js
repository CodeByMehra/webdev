const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir(`./files`, function(err,files){
    res.render("index", {files});
  })
});

app.get("/edit/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, data) {
    if(err) res.send(err);
    res.render("edit", {data, filename : req.params.filename})
  })
});

app.post("/update/:filename", (req, res) => {
  fs.writeFile(`./files/${req.params.filename}`,req.body.filedata, function(err) {
    if(err) res.send(err);
    res.redirect("/")
  })
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./files/${req.params.filename}`, function(err) {
    if(err) res.send(err);
    res.redirect("/")
  })
});

app.get("/create", (req, res) => {
    fs.readdir(hisaab, (err, files) => {
        if (err) {
            console.log("Error reading files:", err);
            return res.render("index", { files: [] });  // if error, send empty
        }
        res.render("index", { files });  // ✅ files is passed to EJS
    });
});

// app.post("/createhisaab", (req, res) => {
//   const today = new Date();
//   const day = String(today.getDate()).padStart(2, "0");
//   const month = String(today.getMonth() + 1).padStart(2, "0"); 
//   const year = String(today.getFullYear()).slice(-2);

//   const date= `${day}-${month}-${year}.txt`
//   fs.writeFile(`./hisaab/${date}`, req.body.content, (err) => {
//     if (err) return res.status(500).send("Error creating file");
    
//   });
//   res.render("create"); 
  
// });

app.listen(3000); 