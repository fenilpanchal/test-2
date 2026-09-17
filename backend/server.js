

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "todo_db"
});

// Get all todos
app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(results);
  });
});

// Add todo
app.post("/todos", (req, res) => {
  const { title } = req.body;

  db.query(
    "INSERT INTO todos (title) VALUES (?)",
    [title],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        id: result.insertId,
        title,
        completed: false
      });
    }
  );
});

// Delete todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM todos WHERE id = ?",
    [id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({ message: "Todo deleted" });
    }
  );
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
