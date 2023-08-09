import joi from "joi"

export const SignUpSchema = joi.object({
    name:joi.string().required(),
    email:joi.string().email().required(),
    cpf:joi.string().regex(/^[0-9]{11}$/).required(),
    telephone:joi.string().regex(/^[0-9]{2}[0-9]{8,9}$/).required(),
    password:joi.string().required()
})

export const SignInSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})