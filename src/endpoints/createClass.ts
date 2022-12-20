import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_CLASS } from "../database/tableNames"
import { TclassRoom } from "../model/ClassRoom"



export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const name = req.body.name as string

    const newClass: TclassRoom = {
        id: Date.now().toString(),
        name
    }
    
    await connection(TABLE_CLASS).insert(newClass)

    res.status(200).send({message: "Class created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}