import { Router } from "express";
import {getUser,postUser,getUserByEmail} from "../controllers/users/index.js";
import routerFollow from "./follower.js"
const router = Router();

router.use("/follower",routerFollow)
router.get("/",getUser)
router.post("/",postUser)
router.get("/byEmail/:email",getUserByEmail)
export default router;