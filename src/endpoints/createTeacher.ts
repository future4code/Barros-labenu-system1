import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_TEACHERS } from "../database/tableNames"
import { TUser } from "../model/User"



export const createTeacher = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const {name, email, birth_date, class_id} = req.body

    const newTeacher: TUser = {
        id: Date.now().toString(),
        name,
        email,
        birth_date,
        class_id
    }
    
    await connection(TABLE_TEACHERS).insert(newTeacher)

    res.status(200).send({message: "Teacher created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}