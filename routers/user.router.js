import { Router } from "express";

import { postUser } from "../controllers/Post.controller.js";
import { getUser } from "../controllers/Get.controller.js";
import { getOneUser } from "../controllers/GetOneUser.controller.js";
import { updateOneUser } from "../controllers/UpdateOneUser.controller.js";
import { deleteUser } from "../controllers/Delete.controller.js";

const routerUser = Router();

//CRUD
routerUser.post("/postUser", postUser);
routerUser.get("/getUser", getUser);

routerUser.get("/:id", getOneUser);
routerUser.put("/:id", updateOneUser);
routerUser.delete("/:id", deleteUser);

export default routerUser;
