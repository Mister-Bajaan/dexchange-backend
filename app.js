import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connect.db.js";


//les routes pour le CRUD
import routerUser from "./routers/user.router.js";

const app = express();


//middlewares pour le parsing des données
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes principal pour les utilisateurs
app.use("/user", routerUser);


// appel de la fonction pour se connecter a la base de données
connectDB();


// appel de la fonction pour charger les variables d'environnement
dotenv.config();

export default app;
