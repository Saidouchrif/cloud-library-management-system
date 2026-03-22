const express = require("express");
const router = express.Router();

const { protect } = require("../middlewares/authMiddleware.js");
const { getProfile } = require("../controllers/utilisateurController.js");
/**
 * Route pour créer un utilisateur
 */
router.get("/profile", protect, getProfile);

module.exports = router;