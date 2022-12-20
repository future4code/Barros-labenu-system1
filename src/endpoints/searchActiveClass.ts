import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_CLASS } from "../database/tableNames"

export const searchActiveClass = async (req: Request, res:Response) => {
    let errorCode = 400

    try{

        const result = await connection(TABLE_CLASS)
        .select()
        .where("module", "not like", "0")
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}