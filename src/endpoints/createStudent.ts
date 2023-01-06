import { Request, Response } from "express"
import { Students } from "../database/Class/Students"
import connection from "../database/connection"
import { studentDataBase } from "../database/studentDataBase"
import { TABLE_CLASS, TABLE_STUDENTS } from "../database/tableNames"
import { TclassRoom } from "../models/ClassRoom"
import { TUser } from "../models/User"



export const createStudent = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const {name, email, birth_date, class_id} = req.body

    // const newStudent: TUser = {
    //     id: Date.now().toString(),
    //     name,
    //     email,
    //     birth_date,
    //     class_id
    // }

    const newStudent = new Students(
        Date.now().toString(),
        name, 
        email, 
        birth_date, 
        class_id
    )

    const studentDB = new studentDataBase()
        studentDB.createStudent(
            newStudent.getId(), newStudent.getName(), newStudent.getEmail(), newStudent.getBirth_date(), newStudent.getClass_id())

    res.status(200).send({message: "Student created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({messahe: error.message})
    }
}