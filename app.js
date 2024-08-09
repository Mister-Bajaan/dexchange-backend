import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connect.db.js";

import routerPost from "./routers/post.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/user", routerPost);


connectDB();

dotenv.config();

export default app;
