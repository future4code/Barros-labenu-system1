import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TEACHERS } from "../database/tableNames"
import { TeacherDataBase } from "../database/TeacherDataBase"

export const searchTeacher = async (req: Request, res:Response) => {
    let errorCode = 400

    try{
    
        const teacherDB =  new TeacherDataBase()
        const result = await teacherDB.searchTeacher()
        
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}