import { Router } from "express";
import {getUser,postUser} from "../controllers/users/index.js";
import routerFollow from "./follower.js"
const router = Router();

router.use("/follower",routerFollow)
router.get("/",getUser)
router.post("/",postUser)

export default router;