import { db } from "../database/database.connection.js";

export async function SignUpRepository(name,email,cpf,telephone,password,image){
    return db.query(`INSERT INTO users(name,email,cpf,telephone,password,image) 
        VALUES ($1,$2,$3,$4,$5,$6)`,[name,email,cpf,telephone,password,image]);
}

export async function getUserRepository(email){
    return db.query(`SELECT * FROM users WHERE email=$1`,[email]);
}

export async function CreateSession(userId,token){
    return db.query(`INSERT INTO sessions("userId",token) VALUES ($1,$2)`,[userId,token])
}

export async function getUserById(userId){
    return db.query(`SELECT users.name, users.email, users.cpf, users.telephone, users.image FROM users WHERE id=$1`,[userId])
}

export async function patchUser(userId,name,email,cpf,telephone,image){
    return db.query(`UPDATE users SET name=$1,email=$2,cpf=$3,telephone=$4,image=$6 WHERE id=$5`,[name,email,cpf,telephone,userId,image])
}