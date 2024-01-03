import { Router } from "express";

const router = Router();

router.post("/",()=>console.log("post new"));

export default router;