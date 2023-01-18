import { Request, Response } from "express"
import { TeacherDataBase } from "../database/TeacherDataBase"



export const updateTeacher = async (req: Request, res: Response) => {
    let errorCode = 400

    try{
    
        const id = req.params.id as string
        const classId = req.body.classId as string

        if (!id) {
            errorCode = 422
            throw new Error("You must enter the id student.");
        }
        if (!classId) {
            errorCode = 422
            throw new Error("You must enter the id class.");
        }

        const teacherDB = new TeacherDataBase()
        await teacherDB.updateTeacher(id, classId)

    res.status(200).send({message: "teacher updated successfully"})
    

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}