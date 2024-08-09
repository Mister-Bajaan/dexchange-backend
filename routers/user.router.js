import { Router } from "express";

import { postUser } from "../controllers/Post.controller.js";
import { getUser } from "../controllers/Get.controller.js";
import { getOneUser } from "../controllers/GetOneUser.controller.js";
import { updateOneUser } from "../controllers/UpdateOneUser.controller.js";

const routerUser = Router();

//CRUD
routerUser.post("/", postUser);
routerUser.get("/", getUser);
routerUser.put("/:id", updateOneUser);

routerUser.get("/:id", getOneUser);

export default routerUser;
