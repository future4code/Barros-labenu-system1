import { Request, Response } from "express"
import { Students } from "../database/Class/Students"
import { StudentDataBase } from "../database/StudentDataBase"




export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const {name, email, birth_date, class_id} = req.body
    
    if (!name) {
        throw new Error("You must enter the Name.");
    }
    if (!email) {
        throw new Error("You must enter the email.");
    }
    if (!birth_date) {
        throw new Error("You must enter the birth date.");
    }
    if (!class_id) {
        throw new Error("You must enter the class.");
    }
    

    const newStudent = new Students(
        Date.now().toString(),
        name, 
        email, 
        birth_date, 
        class_id
    )

    const studentDB = new StudentDataBase()
    const allEmail = await studentDB.compareEmail(email);
  
      if (allEmail.length > 0) {
        errorCode = 402;
        throw new Error("This email account already exists.");
      }

    studentDB.createStudent(newStudent.getId(), newStudent.getName(), newStudent.getEmail(), newStudent.getBirth_date(), newStudent.getClass_id())

    res.status(200).send({message: "Student created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}