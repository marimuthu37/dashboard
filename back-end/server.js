const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#mari37",
  database: "admin",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL Database");
});

app.get("/users", (req, res) => {
    db.query("SELECT * FROM master_user", (err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            res.status(500).send("Failed to fetch users");
            return;
        }
        res.json(result);
    });
});


app.listen(7777, () => {
    console.log("Server is running on port 7777");
    });