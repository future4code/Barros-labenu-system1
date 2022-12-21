import { Request, Response } from "express"
import { ClassRoom } from "../database/Class/ClassRoom"
import { ClassDataBase } from "../database/ClassDataBase"
import connection from "../database/connection"
import { TABLE_CLASS } from "../database/tableNames"
import { TclassRoom } from "../model/ClassRoom"



export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const name = req.body.name as string

    // const newClass: TclassRoom = {
    //     id: Date.now().toString(),
    //     name
    // }
    
    const newClass = new ClassRoom(
        Date.now().toString(),
        name
    )

    const classDB = new ClassDataBase()
        classDB.createClass(newClass.getId(), newClass.getName())

    res.status(200).send({message: "Class created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}