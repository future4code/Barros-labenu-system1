import { TUser } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class TeacherDataBase extends BaseDatabase{
    protected static TABLE_TEACHERS = "Labe_Teachers"

    public createTeacher = async (id: string, name: string, email: string, birth_date: string, class_id:string) => {
        const newTeacher: TUser = {
            id,
            name,
            email,
            birth_date,
            class_id
        } 
        
        await BaseDatabase.connection(TeacherDataBase.TABLE_TEACHERS).insert(newTeacher)
    }

    public compareEmail = async(email:string) => {
        const result = await BaseDatabase.connection(TeacherDataBase.TABLE_TEACHERS)
        .select()
        .where("email", "like", email)
        return result
      }

      public searchTeacher = async () =>{
        const result = await BaseDatabase.connection(TeacherDataBase.TABLE_TEACHERS).select()
        return result
    }

    public updateTeacher = async (id:string, classId:string) => {
        await BaseDatabase.connection(TeacherDataBase.TABLE_TEACHERS)
        .where({id: id})
        .update({class_id: classId})
    }

}