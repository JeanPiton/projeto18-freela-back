import { db } from "../database/database.connection.js";

export async function SignUpRepository(name,email,cpf,telephone,password){
    return db.query(`INSERT INTO users(name,email,cpf,telephone,password) 
        VALUES ($1,$2,$3,$4,$5)`,[name,email,cpf,telephone,password]);
}

export async function getUserRepository(email){
    return db.query(`SELECT * FROM users WHERE email=$1`,[email]);
}

export async function CreateSession(userId,token){
    return db.query(`INSERT INTO sessions("userId",token) VALUES ($1,$2)`,[userId,token])
}