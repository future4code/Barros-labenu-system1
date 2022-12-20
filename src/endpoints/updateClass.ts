import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_CLASS } from "../database/tableNames"
import { TclassRoom } from "../model/ClassRoom"



export const updateClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const className = req.params.className as string
        const module = req.body.module as string

        await connection(TABLE_CLASS)
        .where({name: className})
        .update({module:module})

    res.status(200).send({message: "module updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }


}