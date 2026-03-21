const Utilisateur = require("../Models/Utilisateur.js");

/**
 * Création d'un utilisateur (temporaire pour initialiser la collection)
 */
exports.createUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);

    res.status(201).json({
      message: "Utilisateur créé avec succès",
      data: utilisateur,
    });
  } catch (error) {
    res.status(400).json({
      message: "Erreur lors de la création de l'utilisateur",
      errors: error.errors,
    });
  }
};