import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { UserByToken } from "../schemas/sessions.schema.js";
import { getUserByToken } from "../controllers/sessions.controllers.js";

const sessionRouter = Router();

sessionRouter.post("/token",validateSchema(UserByToken),getUserByToken)

export default sessionRouter