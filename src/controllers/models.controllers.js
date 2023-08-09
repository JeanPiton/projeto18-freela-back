import { getAllModels } from "../repositories/models.repository.js"

export async function getModels(req,res){
    const offset = req.query.offset?req.query.offset:0

    try {
        const {rows} = await getAllModels(offset)
        res.status(200).send(rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}