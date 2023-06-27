const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const knex = require("knex");
const crypto = require("crypto");

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

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

app.use(
  session({
    secret: generateSecretKey(),
    resave: false,
    saveUninitialized: true,
  })
);

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

  db.select("id", "name", "email")
    .from("users_info")
    .where({
      email: email,
      password: password,
    })
    .then((data) => {
      if (data.length) {
        req.session.userId = data[0].id;
        res.json(data[0]);
      } else {
        res.json("email or password is incorrect");
      }
    });
});

app.post("/save-entry", (req, res) => {
  const { title, date, happen, challenges, achievement, userid } = req.body;

  const userId = req.session.userId;

  if (!userId) {
    return res.sendStatus(401); // Unauthorized
  }

  const entry = {
    title,
    date,
    happen,
    challenges,
    achievement,
    userid: userId,
  };

  db("entries")
    .insert(entry)
    .returning("*")
    .then((data) => {
      const savedEntry = data[0];
      res.json(savedEntry);
    })
    .catch((error) => {
      console.error("Error saving entry:", error);
      res.status(500).json({
        error: "An error occurred while saving the entry.",
        details: error.stack,
      });
    });
});

app.get("/get-entries", (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.sendStatus(401);
  }

  db.select("*")
    .from("entries")
    .where({ userid: userId })
    .then((entries) => {
      res.setHeader("Content-Type", "application/json");
      res.json(entries);
    })
    .catch((error) => {
      console.error("Error fetching entries:", error);
      res.sendStatus(500);
    });
});

app.get("/entry", (req, res) => {
  const entryId = req.query.id;
  console.log(entryId);
  db.select("*")
    .from("entries")
    .where({ id: entryId })
    .then((entries) => {
      if (entries.length > 0) {
        res.json(entries[0]);
      } else {
        res.status(404).json({ error: "Entry not found" });
      }
    })
    .catch((error) => {
      console.error("Error fetching entry:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the entry" });
    });
});

const secretKey = generateSecretKey();
console.log("Secret Key:", secretKey);

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
