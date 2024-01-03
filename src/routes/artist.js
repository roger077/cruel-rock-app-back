import { Router } from "express";
import {getArtist, postArtist, getArtistById} from "../controllers/artist/index.js"
import {verifyUserExist} from "../middlewares/verifyUserExist.js"
//import Artist from "../models/Artist.js";

const router = Router();

router.get("/",getArtist);
router.post("/",[verifyUserExist],postArtist);
router.get("/byId/:artistId",getArtistById);

export default router;