import { Router } from "express";

import { postUser } from "../controllers/Post.controller.js";

const routerPost = Router();

//CRUD
routerPost.post("/", postUser);

export default routerPost;
