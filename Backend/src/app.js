const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
const routes = require("./routes");
app.use("/api", routes);

// Route test
app.get("/", (req, res) => {
  res.send("API Bibliothèque fonctionne 🚀");
});

module.exports = app;