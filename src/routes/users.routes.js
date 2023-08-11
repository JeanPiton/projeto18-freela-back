import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { SignInSchema, SignUpSchema } from "../schemas/users.schema.js";
import { SignInUser, SignUpUser, UserInfo } from "../controllers/users.controllers.js";
import { validateAuth } from "../middleware/validateAuth.js";

const userRouter = Router();

userRouter.post("/sign-up",validateSchema(SignUpSchema),SignUpUser)
userRouter.post("/sign-in",validateSchema(SignInSchema),SignInUser)
userRouter.get("/user/info",validateAuth,UserInfo)

export default userRouter