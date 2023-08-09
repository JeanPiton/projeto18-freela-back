import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { getModels } from "../controllers/models.controllers.js";

const modelsRouter = Router();

modelsRouter.get("/models",getModels)

export default modelsRouter