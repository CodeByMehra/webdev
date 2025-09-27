const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", (req, res) => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); 
  const year = String(today.getFullYear()).slice(-2);

  const date= `${day}-${month}-${year}.txt`
  fs.writeFile(`./files/${date}`, "check check",  (err) => {
  if (err) {
    console.error("Error creating file:", err);
    return res.status(500).send("Error creating file");
  }
  res.send(`File ${date} created successfully!`);
});
  res.send(`File ${date} created successfully!`);
});

app.listen(3000); 