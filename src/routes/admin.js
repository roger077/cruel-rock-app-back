import { Admin } from "../models/index.js";
import { Router } from "express";
import { verifyIsAdmin } from "../middlewares/verifyAdmin.js";
import { verifyUserExist } from "../middlewares/verifyUserExist.js";
import {postAdmin,getAdministrators} from "../controllers/admin/index.js"

const router = Router();

router.get("/",getAdministrators);
router.post("/",[verifyUserExist],postAdmin);

export default router;
