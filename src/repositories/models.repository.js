import { db } from "../database/database.connection.js";

export async function getAllModels(offset){
    return db.query(`SELECT * FROM models LIMIT 10 OFFSET $1`,[offset])
}