import joi from "joi"

export const IdSchema = joi.object({
    id:joi.number().integer().required()
})