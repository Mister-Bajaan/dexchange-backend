import { Router } from "express";

import { postUser } from "../controllers/Post.controller.js";
import { getUser } from "../controllers/Get.controller.js";

const routerUser = Router();

//CRUD
routerUser.post("/", postUser);
routerUser.get("/", getUser);

export default routerUser;
