import { getAllModels, getIdModel } from "../repositories/models.repository.js"

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