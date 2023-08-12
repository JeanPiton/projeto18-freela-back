import { db } from "../database/database.connection.js";

export async function getAllModels(offset){
    return db.query(`SELECT * FROM models ORDER BY id DESC LIMIT 11 OFFSET $1`,[offset])
}

export async function getIdModel(id){
    return db.query(`SELECT models.*, users.name AS "ownerName", users.email, users.telephone, species.name AS race FROM models 
    JOIN users ON users.id = models."ownerId" 
    JOIN species ON species.id = models."speciesId"
    WHERE models.id=$1`,[id])
}

export async function getModelsByUser(userId){
    return db.query(`SELECT models.* FROM models JOIN users ON users.id = models."ownerId" WHERE users.id = $1 ORDER BY models.id ASC`,[userId])
}

export async function getRaces(){
    return db.query(`SELECT * FROM species ORDER BY name ASC`)
}

export async function createRace(race){
    return db.query(`INSERT INTO species(name) VALUES($1) RETURNING id`,[race])
}

export async function patchModel(name,image,description,active,raceId,id,userId){
    return db.query(`UPDATE models 
        SET name=$1,image=$2,description=$3,active=$4,"speciesId"=$5 
        WHERE id=$6 AND "ownerId"=$7`,[name,image,description,active,raceId,id,userId])
}