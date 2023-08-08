import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { SignUpSchema } from "../schemas/users.schema.js";
import { SignUpUser } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/sign-up",validateSchema(SignUpSchema),SignUpUser)

export default userRouter