import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_STUDENTS, TABLE_TEACHERS } from "../database/tableNames"



export const updateTeacher = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const id = req.params.id as string
        const classId = req.body.classId as string

        await connection(TABLE_TEACHERS)
        .where({id: id})
        .update({class_id: classId})

    res.status(200).send({message: "teacher updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }


}