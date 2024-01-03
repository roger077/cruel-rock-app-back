import { Router } from "express";
import { postViewer,followArtist,unfollowArtist } from "../controllers/viewer/index.js"
import { verifyUserExist, verifyUserByToken } from "../middlewares/verifyUserExist.js";
const router = Router();

router.post("/",[verifyUserExist],postViewer)
router.put("/follow/:idArtist",[verifyUserByToken],followArtist)
router.put("/unfollow/:idArtist",[verifyUserByToken],unfollowArtist)
export default router;