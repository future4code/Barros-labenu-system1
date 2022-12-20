import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_CLASS, TABLE_STUDENTS } from "../database/tableNames"
import { TclassRoom } from "../model/ClassRoom"
import { TUser } from "../model/User"



export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const {name, email, birth_date, class_id} = req.body

    const newStudent: TUser = {
        id: Date.now().toString(),
        name,
        email,
        birth_date,
        class_id
    }
    
    await connection(TABLE_STUDENTS).insert(newStudent)

    res.status(200).send({message: "Student created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}