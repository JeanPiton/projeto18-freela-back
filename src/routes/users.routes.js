import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { SignInSchema, SignUpSchema } from "../schemas/users.schema.js";
import { SignInUser, SignUpUser } from "../controllers/users.controllers.js";

const userRouter = Router();

userRouter.post("/sign-up",validateSchema(SignUpSchema),SignUpUser)
userRouter.post("/sign-in",validateSchema(SignInSchema),SignInUser)

export default userRouter