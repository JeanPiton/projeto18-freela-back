import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"
import { CreateSession, SignUpRepository, getUserById, getUserRepository, patchUser } from "../repositories/user.repository.js"

export async function SignUpUser(req,res){
    const {name,email,cpf,telephone,password,image} = req.body
    
    try {
        const hash = bcrypt.hashSync(password,10)
        await SignUpRepository(name,email,cpf,telephone,hash,image)
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

export async function UserInfo(req,res){
    const userId = res.locals.session

    try {
        const {rows:[user]} = await getUserById(userId)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function PatchUserInfo(req,res){
    const userId = res.locals.session
    const {name,email,cpf,telephone,image} = req.body

    try {
        await patchUser(userId,name,email,cpf,telephone,image)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}