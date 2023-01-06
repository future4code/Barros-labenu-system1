import { Request, Response } from "express"
import { StudentDataBase} from "../database/StudentDataBase"

export const searchStudentByName = async (req: Request, res:Response) => {
    let errorCode = 400

    try{
        let name = req.params.name as string

        if(!name){
            name = "%"
        }

        const studentDB = new StudentDataBase()
        const result = await studentDB.searchStudentByName(name)
        res.status(200).send(result) 

    }catch (error) {
        res.status(errorCode).send({message: error.message})        
    }

}