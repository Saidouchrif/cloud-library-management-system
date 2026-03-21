const express = require("express");
const router = express.Router();
const {
  createUtilisateur,
} = require("../Controllers/UtilisateurController");

/**
 * Route pour créer un utilisateur
 */
router.post("/", createUtilisateur);

module.exports = router;