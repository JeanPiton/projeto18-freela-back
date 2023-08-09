import { Router } from "express";
import userRouter from "./users.routes.js";
import sessionRouter from "./sessions.routes.js";

const router = Router()

router.use(userRouter)
router.use(sessionRouter)

export default router