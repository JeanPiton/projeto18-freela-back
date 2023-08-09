import { Router } from "express";
import userRouter from "./users.routes.js";
import sessionRouter from "./sessions.routes.js";
import modelsRouter from "./models.routes.js";

const router = Router()

router.use(userRouter)
router.use(sessionRouter)
router.use(modelsRouter)

export default router