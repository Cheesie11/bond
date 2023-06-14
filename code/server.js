const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    server: "postgres",
    user: "admin",
    password: "secret-pwd",
    database: "bond",
  },
});

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(intialPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(intialPath, "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(intialPath, "register.html"));
});

app.get("/library", (req, res) => {
  res.sendFile(path.join(intialPath, "library.html"));
});

app.post("/register-user", (req, res) => {
  const { name, email, password } = req.body;

  if (!name.length || !email.length || !password.length) {
    res.json("fill all the fields");
  } else {
    db("users_info")
      .insert({
        name: name,
        email: email,
        password: password,
      })
      .returning(["name", "email"])
      .then((data) => {
        res.json(data[0]);
      })
      .catch((err) => {
        if (err.detail.includes("already exists")) {
          res.json("email already exists");
        }
      });
  }
});

app.post("/login-user", (req, res) => {
  const { email, password } = req.body;

  db.select("name", "email")
    .from("users_info")
    .where({
      email: email,
      password: password,
    })
    .then((data) => {
      if (data.length) {
        res.json(data[0]);
      } else {
        res.json("email or password is incorrect");
      }
    });
});

const entriesFilePath = path.join(__dirname, "entries.json");

app.get("/get-entries", (req, res) => {
  try {
    const entriesData = fs.readFileSync(entriesFilePath);
    const entries = JSON.parse(entriesData);
    res.setHeader("Content-Type", "application/json");
    res.json(entries);
  } catch (error) {
    console.error("Error reading entries:", error);
    res.sendStatus(500);
  }
});

app.post("/save-entry", (req, res) => {
  const { title, date, happen, challenges, achievement } = req.body;

  const entry = {
    title,
    date,
    happen,
    challenges,
    achievement,
  };

  let entries = [];
  try {
    const entriesData = fs.readFileSync(entriesFilePath);
    entries = JSON.parse(entriesData);
  } catch (error) {
    console.error("Error reading entries:", error);
  }

  entries.push(entry);

  try {
    fs.writeFileSync(entriesFilePath, JSON.stringify(entries, null, 2));
    res.setHeader("Content-Type", "application/json");
    res.json(entry);
  } catch (error) {
    console.error("Error saving entry:", error);
    res.sendStatus(500);
  }
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000......");
});
