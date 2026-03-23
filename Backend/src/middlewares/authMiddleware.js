const { verifyAccessToken } = require("../utils/jwt.js");
const Utilisateur = require("../Models/Utilisateur.js");

exports.protect = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth || !auth.startsWith("Bearer"))
    return res.status(401).json({ message: "Non autorisé" });

  const token = auth.split(" ")[1];
  const decoded = verifyAccessToken(token);

  if (!decoded)
    return res.status(401).json({ message: "Token invalide" });

  req.user = await Utilisateur.findById(decoded.id).select("-motDePasse");

  next();
};
