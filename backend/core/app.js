const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User
app.get("/users", (req, res) => {
  console.log(__dirname);
  const userFile = fs.readFileSync("./database/users.json", "utf-8");
  return res.send(200, JSON.parse(userFile));
});

app.get("/users/:id", (req, res) => {
  const userFile = fs.readFileSync("./database/users.json", "utf-8");
  const users = JSON.parse(userFile);
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User was not found");
  }
  return res.status(200).send(user);
});

//Logger
app.get("/logger", (req, res) => {
  res.send("Welcome to logging!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
