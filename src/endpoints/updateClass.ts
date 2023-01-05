import { Request, Response } from "express"
import { ClassDataBase } from "../database/ClassDataBase"
import connection from "../database/connection"
import { TABLE_CLASS } from "../database/tableNames"
import { TclassRoom } from "../model/ClassRoom"



export const updateClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const className = req.params.className as string
        const module = req.body.module as string

        const classDB = new ClassDataBase()
        await classDB.updateClass(className,module)

    res.status(200).send({message: "module updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }


}