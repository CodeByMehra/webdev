const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs'); // Added file system module

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("hey");
});

app.listen(3000);