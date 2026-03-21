const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const routes = require("./Routes");

dotenv.config();

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Utilisation des routes
app.use("/api", routes);

// Route de test principale
app.get("/", (req, res) => {
  res.send("API Bibliothèque fonctionne 🚀");
});













 //Fonction pour démarrer le serveur uniquement si la DB est connectée
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Impossible de démarrer le serveur sans base de données");
  }
};

// Lancer le serveur
startServer();