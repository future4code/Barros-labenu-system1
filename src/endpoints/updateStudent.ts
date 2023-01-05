import { Request, Response } from "express"
import connection from "../database/connection"
import { studentDataBase } from "../database/studentDataBase"
import { TABLE_STUDENTS } from "../database/tableNames"



export const updateStudent = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const id = req.params.id as string
        const classId = req.body.classId as string

        const studentDB = new studentDataBase()
        await studentDB.updateStudent(id, classId)

    res.status(200).send({message: "student updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }


}