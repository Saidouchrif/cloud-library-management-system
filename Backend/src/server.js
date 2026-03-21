const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API Bibliothèque fonctionne");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});