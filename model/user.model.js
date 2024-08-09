import mongoose from "mongoose";

const { Schema } = mongoose;


/**
 * l'ensemble des champs de l'utilisateur pour lapartie dashboard et ses informations personnelles 
 *
 * Dashboard : Nom, prénom, email, role, status
 * Personnel : Nom, prénom, email, phone, adresse, role
 */

const userSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "Client",

    //l'utilisateur ne pourra faire que ces choix, a mettre dans inut role
    enum: ["Agence", "Admin", "Client", "Mandataire"],
  },
  status: {
    type: String,
    default: "actif",
    enum: ["actif", "inactif"],
  },
  phone: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

// Création du modèle UserSchema à partir du schéma dans la base de données
export const User = mongoose.model("UserSchema", userSchema);
