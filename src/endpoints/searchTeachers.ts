import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TEACHERS } from "../database/tableNames"

export const searchTeacher = async (req: Request, res:Response) => {
    let errorCode = 400

    try{
    
        const result = await connection(TABLE_TEACHERS).select()
        
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}