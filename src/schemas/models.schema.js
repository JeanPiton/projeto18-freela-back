import joi from "joi"

export const IdSchema = joi.object({
    id:joi.number().integer().required()
})

export const ModelSchema = joi.object({
    name:joi.string().required(),
    image:joi.string().uri().required(),
    description:joi.string().required(),
    active:joi.boolean().required(),
    race:joi.string().required()
})