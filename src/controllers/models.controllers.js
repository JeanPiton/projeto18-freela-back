import { createRace, getAllModels, getIdModel, getModelsByUser, getRaces, patchModel } from "../repositories/models.repository.js"

export async function getModels(req,res){
    const offset = req.query.offset?req.query.offset:0

    try {
        const {rows} = await getAllModels(offset)
        res.status(200).send(rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getModelById(req,res){
    const {id} = req.params

    try {
        const {rows:[model]} = await getIdModel(id)
        if(model==undefined) return res.sendStatus(404)
        res.status(200).send(model)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getModelsByUserId(req,res){
    const userId = res.locals.session

    try {
        const {rows} = await getModelsByUser(userId)
        const races = await getRaces()
        res.status(200).send({models:rows,races:races.rows})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function patchUserModel(req,res){
    const userId = res.locals.session
    const {name,image,description,active,race} = req.body
    const {id} = req.params

    try {
        const races = await getRaces()
        const result = races.rows.filter(e=>e.name==race)
        let raceId
        if(result.length>0){
            raceId = result[0].id
        }else{
            raceId = await createRace(race)
        }
        await patchModel(name,image,description,active,raceId,id,userId)
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}