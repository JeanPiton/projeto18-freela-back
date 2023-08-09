import { db } from "../database/database.connection.js";

export async function getUserToken(email,token){
    return db.query(`SELECT users.*,sessions.id AS "sessionId",sessions.token AS token FROM users
	JOIN sessions ON sessions."userId"=users.id
	WHERE sessions.token=$1 AND users.email=$2`,[token,email])
}