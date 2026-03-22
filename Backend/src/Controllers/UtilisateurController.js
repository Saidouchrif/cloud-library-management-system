const Utilisateur = require("../models/utilisateur.js");


// Récupération du profil de l'utilisateur connecté
exports.getProfile = (req, res) => {
  res.json(req.user);
};