import { Request, Response } from "express"
import { Teacher } from "../database/Class/Teachers"
import { TeacherDataBase } from "../database/TeacherDataBase"



export const createTeacher = async (req: Request, res: Response) => {
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

    const newTeacher = new Teacher(Date.now().toString(),name, email, birth_date,class_id)
    const teacherDB = new TeacherDataBase()
    const allEmail = await teacherDB.compareEmail(email);

    if (allEmail.length > 0) {
        errorCode = 402;
        throw new Error("This email account already exists.");
      }

    teacherDB.createTeacher(newTeacher.getId(), newTeacher.getName(), newTeacher.getEmail(), newTeacher.getBirth_date(), newTeacher.getClass_id())
    

    res.status(200).send({message: "Teacher created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}