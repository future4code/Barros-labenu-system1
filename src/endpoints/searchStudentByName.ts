import { Request, Response } from "express"
import connection from "../database/connection"
import { studentDataBase } from "../database/studentDataBase"
import { TABLE_CLASS, TABLE_STUDENTS } from "../database/tableNames"

export const searchStudentByName = async (req: Request, res:Response) => {
    let errorCode = 400

    try{
        const name = req.params.name as string
        const studentDB = new studentDataBase()
        const result = await studentDB.searchStudentByName(name)        
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}