import { Request, Response } from "express"
import { Teacher } from "../database/Class/Teachers"
import connection from "../database/connection"
import { TABLE_TEACHERS } from "../database/tableNames"
import { TeacherDataBase } from "../database/TeacherDataBase"
import { TUser } from "../model/User"



export const createTeacher = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    const {name, email, birth_date, class_id} = req.body

    // const newTeacher: TUser = {
    //     id: Date.now().toString(),
    //     name,
    //     email,
    //     birth_date,
    //     class_id
    // }

    const newTeacher = new Teacher(Date.now().toString(),name, email, birth_date,class_id)
    const teacherDB = new TeacherDataBase()

    teacherDB.createTeacher(newTeacher.getId(), newTeacher.getName(), newTeacher.getEmail(), newTeacher.getBirth_date(), newTeacher.getClass_id())
    

    res.status(200).send({message: "Teacher created successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}