const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User
app.get("/user", (req, res) => {
  console.log(__dirname);
  const userFile = fs.readFileSync("./database/users.json", "utf-8");
  return res.send(200, JSON.parse(userFile));
});

app.get("/user/:id", (req, res) => {});
//User

//Logger
app.get("/logger", (req, res) => {
  res.send("Welcome to logging!");
});
//Logger

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
