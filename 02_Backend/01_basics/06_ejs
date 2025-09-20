// =========================
// EJS (Embedded JavaScript) Notes
// =========================

// 1️⃣ Comments in EJS
/*
  EJS comment (not rendered in HTML):
  <%# This is a comment in EJS %>

  HTML comment (rendered in HTML):
  <!-- This is a comment visible in HTML -->
*/

// 2️⃣ Interpolation / Output
/*
  <%= variable %>    => outputs escaped value
  <%- variable %>    => outputs unescaped HTML
*/

// Example:
const username = "Vishal";
// <h1>Hello, <%= username %>!</h1>
// renders: Hello, Vishal!

// 3️⃣ Embedding JavaScript
/*
  <% JavaScript code %> 
  => Runs JS but does not output to HTML
*/
const hour = new Date().getHours();
// <% let hour = new Date().getHours(); %>

// 4️⃣ Passing Data to EJS
/*
  In Express:
  app.get("/", (req,res) => {
      res.render("home", { username: "Vishal", posts: ["Hi", "Hello"] });
  });

  In EJS template:
  <h1>Welcome, <%= username %></h1>
  <% posts.forEach(post => { %>
      <li><%= post %></li>
  <% }) %>
*/

// 5️⃣ Conditional Statements
/*
<% if(user.isAdmin) { %>
  <p>Welcome Admin!</p>
<% } else if(user.isModerator) { %>
  <p>Welcome Moderator!</p>
<% } else { %>
  <p>Welcome User!</p>
<% } %>
*/

// 6️⃣ Loops in EJS
/*
ForEach loop:
<% posts.forEach(post => { %>
    <li><%= post %></li>
<% }) %>

For loop:
<% for(let i=0; i<5; i++) { %>
    <p>Post number <%= i+1 %></p>
<% } %>
*/

// =========================
// 7️⃣ Basic Instagram-style Example
// =========================

/*
// Express Setup (app.js)
*/

const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Sample data
const user = { name: "Vishal", isFollowing: true };
const posts = [
  { id: 1, content: "My first post" },
  { id: 2, content: "Enjoying coding!" }
];

app.get("/", (req, res) => {
  res.render("instagram", { user, posts });
});

app.listen(3000, () => console.log("Server running on port 3000"));

// =========================
// EJS Template: views/instagram.ejs
// =========================

const instagramEJS = `
<!DOCTYPE html>
<html>
<head>
    <title>Instagram Basic</title>
</head>
<body>
    <%# User greeting %>
    <h1>Hello, <%= user.name %>!</h1>

    <%# Conditional follow message %>
    <% if(user.isFollowing) { %>
        <p>You are following this user.</p>
    <% } else { %>
        <p>Follow this user to see posts.</p>
    <% } %>

    <%# Display posts %>
    <h2>Posts:</h2>
    <ul>
        <% posts.forEach(post => { %>
            <li><%= post.content %></li>
        <% }) %>
    </ul>
</body>
</html>
`;

// To save this template in VS Code, create a file: views/instagram.ejs
// and paste the contents of instagramEJS string.
