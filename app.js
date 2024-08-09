import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connect.db.js";

import routerUser from "./routers/user.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", routerUser);

connectDB();

dotenv.config();

export default app;
