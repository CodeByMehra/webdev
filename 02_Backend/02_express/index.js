const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application object

console.dir(app); // Print the app object details to the console (for debugging/inspection)

let port = 3000; // Define the port number where the server will run
app.listen(port, () => { // Start the server and listen on the given port
    console.log(`App is responding at port : ${port}`) // Log confirmation when server starts
});

// app.use((req, res) => { // Middleware to handle every incoming request
//     console.log("Request received!!") // Log a message whenever a request hits the server
// })

app.get("/", (req,res)=>{
    res.send("You're in Root path")
})

app.get("/help", (req,res)=>{
    res.send(" Welcome to the help Desk of Localhost")
})
//  //default response
// app.get("/*", (req,res)=>{   
//     res.send("Path does not exist")
// })

app.post("/", (req,res)=>{
    res.send("you sent a post request")
})