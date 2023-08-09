import { Router } from "express";
import { validateParamSchema, validateSchema } from "../middleware/validateSchema.js";
import { getModelById, getModels } from "../controllers/models.controllers.js";
import { IdSchema } from "../schemas/models.schema.js";

const modelsRouter = Router();

modelsRouter.get("/models",getModels)
modelsRouter.get("/model/:id",validateParamSchema(IdSchema),getModelById)

export default modelsRouter