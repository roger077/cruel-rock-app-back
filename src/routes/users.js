import { Router } from "express";
import {getUser, getUserByEmail, banUser} from "../controllers/users/index.js";
import { verifyUserByToken } from "../middlewares/verifyUserExist.js";
import { verifyIsAdmin } from "../middlewares/verifyAdmin.js";
import routerFollow from "./follower.js"
const router = Router();

//router.use("/follower",routerFollow)
router.get("/",getUser)
//router.post("/",postUser)
router.get("/byEmail/:email",getUserByEmail)
router.patch("/ban/:emailUser",[verifyIsAdmin],banUser)

export default router;