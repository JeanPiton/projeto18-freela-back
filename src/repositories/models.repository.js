import { db } from "../database/database.connection.js";

export async function getAllModels(offset){
    return db.query(`SELECT * FROM models LIMIT 11 OFFSET $1`,[offset])
}

export async function getIdModel(id){
    return db.query(`SELECT models.*, users.name AS "ownerName", users.email, users.telephone, species.name AS race FROM models 
    JOIN users ON users.id = models."ownerId" 
    JOIN species ON species.id = models."speciesId"
    WHERE models.id=$1`,[id])
}