import { db } from "../database/database.connection.js";

export async function SignUpRepository(name,email,cpf,telephone,password){
    return db.query(`INSERT INTO users(name,email,cpf,telephone,password) 
        VALUES ($1,$2,$3,$4,$5)`,[name,email,cpf,telephone,password]);
}