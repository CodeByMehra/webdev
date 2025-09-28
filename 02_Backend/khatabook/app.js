const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path2D,join(__dirname, "pulic")))

app.get("/", (req, res)=>{
    res.send("Yeah its working")
});

app.listen(3000);