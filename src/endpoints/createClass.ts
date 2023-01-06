import { Request, Response } from "express"
import { ClassRoom } from "../database/Class/ClassRoom"
import { ClassDataBase } from "../database/ClassDataBase"


export const createClass = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const name = req.body.name as string

    if (!name) {
        throw new Error("You must enter the class name.");
      }
  
      const newClass = new ClassRoom(Date.now().toString(), name);
      const classDB = new ClassDataBase();
  
      const classes = await classDB.compareClass(name);
  
      if (classes.length > 0) {
        errorCode = 402;
        throw new Error("This class name already exists.");
      }
  
      classDB.createClass(newClass.getId(), newClass.getName());
  
      res.status(200).send({ message: "Class created successfully" });

    res.status(200).send({message: "Class created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}