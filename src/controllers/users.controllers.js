import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"
import { CreateSession, SignUpRepository, getUserRepository } from "../repositories/user.repository.js"

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

export async function SignInUser(req,res){
    const {email,password} = req.body

    try {
        const {rows:[user]} = await getUserRepository(email)
        if(user==undefined||!bcrypt.compareSync(password,user.password)) return res.status(401).send("email/password is wrong")
        const token = uuid()
        await CreateSession(user.id,token)
        res.status(200).send({token})
    } catch (err) {
        res.status(500).send(err.message)
    }
}