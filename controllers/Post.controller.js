import { User } from "../model/user.model.js";
import bcrypt from "bcrypt";

export const postUser = async (req, res) => {
  if (
    !req.body.nom ||
    !req.body.prenom ||
    !req.body.email ||
    !req.body.password ||
    !req.body.role ||
    !req.body.status
  ) {
    res.status(400).json({ alerte: "Veuillez saisir toutes les informations" });
  }


  //verification de l'existance de l'utilisateur dans la base de données
  const email = req.body.email;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }


  //Hashing du mot de passe
  const hashedPassword = await bcrypt.hash(req.body.password, 12);


  //Création de l'utilisateur dans la base de données
  const post = await User.create({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    status: req.body.status,
    role: req.body.role,
    password: hashedPassword,
  });

  res.status(200).json(post);
};
