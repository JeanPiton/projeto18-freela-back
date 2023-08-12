import { Router } from "express";
import { validateParamSchema, validateSchema } from "../middleware/validateSchema.js";
import { createModel, getAllRaces, getModelById, getModels, getModelsByUserId, patchUserModel } from "../controllers/models.controllers.js";
import { IdSchema, ModelSchema } from "../schemas/models.schema.js";
import { validateAuth } from "../middleware/validateAuth.js";

const modelsRouter = Router();

modelsRouter.get("/models",getModels)
modelsRouter.get("/model/:id",validateParamSchema(IdSchema),getModelById)
modelsRouter.get("/models/user",validateAuth,getModelsByUserId)
modelsRouter.post("/models/user",validateAuth,validateSchema(ModelSchema),createModel)
modelsRouter.patch("/models/user/:id",validateAuth,validateParamSchema(IdSchema),validateSchema(ModelSchema),patchUserModel)
modelsRouter.get("/models/races",getAllRaces)

export default modelsRouter