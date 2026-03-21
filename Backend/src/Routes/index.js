const express = require("express");
const router = express.Router();

// Import des routes
const utilisateurRoutes = require("./UtilisateurRoutes.js");

// Centralisation
router.use("/utilisateurs", utilisateurRoutes);

module.exports = router;