import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { SignInSchema, SignUpSchema, UserInfoSchema } from "../schemas/users.schema.js";
import { PatchUserInfo, SignInUser, SignUpUser, UserInfo } from "../controllers/users.controllers.js";
import { validateAuth } from "../middleware/validateAuth.js";

const userRouter = Router();

userRouter.post("/sign-up",validateSchema(SignUpSchema),SignUpUser)
userRouter.post("/sign-in",validateSchema(SignInSchema),SignInUser)
userRouter.get("/user/info",validateAuth,UserInfo)
userRouter.patch("/user/info",validateAuth,validateSchema(UserInfoSchema),PatchUserInfo)

export default userRouter