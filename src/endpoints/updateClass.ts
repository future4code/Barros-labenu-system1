import { Request, Response } from "express"
import { ClassDataBase } from "../database/ClassDataBase"



export const updateClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const className = req.params.className as string
        const module = req.body.module as string

        if (!className) {
            errorCode = 422
            throw new Error("You must enter the class name.");
        }
        if (!module) {
            errorCode = 422
            throw new Error("You must enter the module.");
        }

        if(module !== "0" && 
        module !== "1" && 
        module !== "2" && 
        module !== "3" && 
        module !== "4" &&
        module !== "5" &&
        module !== "6"
        ){
            errorCode = 422
            throw new Error("Module does not exist. The existing modules are: 0, 1, 2, 3, 4, 5,6.")            
        }

       const classDB = new ClassDataBase()
       await classDB.updateClass(className, module)

    res.status(200).send({message: "module updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }


}