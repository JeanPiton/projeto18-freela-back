import bcrypt from "bcrypt"
import { SignUpRepository } from "../repositories/user.repository.js"

export async function SignUpUser(req,res){
    const {name,email,cpf,telephone,password} = req.body
    
    try {
        const hash = bcrypt.hashSync(password,10)
        await SignUpRepository(name,email,cpf,telephone,hash)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}