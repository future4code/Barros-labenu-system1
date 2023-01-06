import { Request, Response } from "express"
import { ClassDataBase } from "../database/ClassDataBase"


export const searchActiveClass = async (req: Request, res:Response) => {
    let errorCode = 400

    try{
        const classDB = new ClassDataBase()
        const result = await classDB.searchActiveClass()
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}