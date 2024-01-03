import { Router } from "express";
import userRouter from "./users.js";
import artistRouter from "./artist.js";
import viewerRouter from "./viewer.js";
import adminRouter from "./admin.js";
const router = Router();

router.use('/users',userRouter);
router.use('/artists',artistRouter);
router.use('/viewer',viewerRouter);
router.use('/admin',adminRouter);

export default router;