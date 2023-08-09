import joi from "joi"

export const UserByToken = joi.object({
    email:joi.string().email().required(),
    token:joi.string().required()
})