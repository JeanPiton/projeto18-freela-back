import { getUserToken } from "../repositories/sessions.repository.js"


export async function getUserByToken(req,res){
    const {email,token} = req.body

    try {
        console.log(email)
        console.log(token)
        const {rows:[user]} = await getUserToken(email,token)
        res.status(200).send(user) 
    } catch (err) {
        res.status(500).send(err.message)
    }
}