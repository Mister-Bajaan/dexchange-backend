import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);

    //pour utiliser l'URI declarer dans le fichier.env
    const uri = process.env.MONGO_URI;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connexion à la base de données MongoDB réussie!");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
