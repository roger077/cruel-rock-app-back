import { Router } from "express";
import verifyArtist from "../middlewares/verifyArtist.js";
import { postFollower } from "../controllers/users/index.js";

const router = Router();

router.post('/',[verifyArtist],postFollower)

export default router;