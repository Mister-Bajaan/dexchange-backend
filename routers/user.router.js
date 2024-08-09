import { Router } from "express";

import { postUser } from "../controllers/Post.controller.js";
import { getUser } from "../controllers/Get.controller.js";
import { getOneUser } from "../controllers/GetOneUser.controller.js";
import { updateOneUser } from "../controllers/UpdateOneUser.controller.js";
import { deleteUser } from "../controllers/Delete.controller.js";

const routerUser = Router();

//CRUD

//http://localhost:3000/user/postUser
routerUser.post("/postUser", postUser);

//http://localhost:3000/user/getUser
routerUser.get("/getUser", getUser);

//http://localhost:3000/user/:id
routerUser.get("/:id", getOneUser);

//http://localhost:3000/user/updateOneUser/:id
routerUser.put("/:id", updateOneUser);

//http://localhost:3000/user/getOneUser/:id
routerUser.delete("/:id", deleteUser);

export default routerUser;
