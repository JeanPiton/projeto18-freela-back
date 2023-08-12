import { Router } from "express";
import { validateParamSchema, validateSchema } from "../middleware/validateSchema.js";
import { getModelById, getModels, getModelsByUserId, patchUserModel } from "../controllers/models.controllers.js";
import { IdSchema, ModelSchema } from "../schemas/models.schema.js";
import { validateAuth } from "../middleware/validateAuth.js";

const modelsRouter = Router();

modelsRouter.get("/models",getModels)
modelsRouter.get("/model/:id",validateParamSchema(IdSchema),getModelById)
modelsRouter.get("/models/user",validateAuth,getModelsByUserId)
modelsRouter.patch("/models/user/:id",validateAuth,validateParamSchema(IdSchema),validateSchema(ModelSchema),patchUserModel)

export default modelsRouter