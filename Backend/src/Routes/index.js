const express = require("express");
const router = express.Router();

// Import des routes
const authRoutes = require("./authRoutes.js");
const utilisateurRoutes = require("./utilisateurRoutes.js");
const categorieRoutes = require("./categorieRoutes.js");
// Utilisation des routes
router.use("/utilisateurs", utilisateurRoutes);
router.use("/categories", categorieRoutes);
router.use("/auth", authRoutes);
// Centralisation
module.exports = router;
