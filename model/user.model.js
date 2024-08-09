import mongoose from "mongoose";

const { Schema } = mongoose;

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
  status: {
    type: String,
    default: "actif",
    enum: ["actif", "inactif"],
  },
  Role: {
    type: String,
    default: "Agence",
    enum: ["Agence", "Admin", "Client", "Mandataire"],
  },
  password: {
    type: String,
    required: true,
  },
});

// Création du modèle UserSchema à partir du schéma dans la base de données
export const User = mongoose.model("UserSchema", userSchema);
