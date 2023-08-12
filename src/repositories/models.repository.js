import { db } from "../database/database.connection.js";

export async function getSomeModels(offset,search,status,raceId){
    return db.query(`SELECT * FROM models WHERE name ILIKE $2 ${status} ${raceId} ORDER BY id DESC LIMIT 11 OFFSET $1`,[offset,search])
}

export async function getIdModel(id){
    return db.query(`SELECT models.*, users.name AS "ownerName", users.email, users.telephone, races.name AS race FROM models 
    JOIN users ON users.id = models."ownerId" 
    JOIN races ON races.id = models."racesId"
    WHERE models.id=$1`,[id])
}

export async function getModelsByUser(userId){
    return db.query(`SELECT models.* FROM models JOIN users ON users.id = models."ownerId" WHERE users.id = $1 ORDER BY models.id ASC`,[userId])
}

export async function getRaces(){
    return db.query(`SELECT * FROM races ORDER BY name ASC`)
}

export async function createRace(race){
    return db.query(`INSERT INTO races(name) VALUES($1) RETURNING id`,[race])
}

export async function patchModel(name,image,description,active,raceId,id,userId){
    return db.query(`UPDATE models 
        SET name=$1,image=$2,description=$3,active=$4,"racesId"=$5 
        WHERE id=$6 AND "ownerId"=$7`,[name,image,description,active,raceId,id,userId])
}

export async function createNewModel(name,image,description,userId,active,raceId){
    return db.query(`INSERT INTO models(name,image,description,"ownerId",active,"racesId") 
        VALUES ($1,$2,$3,$4,$5,$6)`,[name,image,description,userId,active,raceId])
}