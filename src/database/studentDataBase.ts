import { TUser } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"


export class studentDataBase extends BaseDatabase{
  protected static TABLE_STUDENTS = "Labe_Students"

  public createStudent = async ( id: string, name: string, email: string, birth_date: string, class_id: string) => {
    const newStudent: TUser = {
      id, 
      name,
      email,
      birth_date,
      class_id
    } 

    await BaseDatabase.connection(studentDataBase.TABLE_STUDENTS).insert(newStudent)
  }

  public searchStudentByName = async (name:string) =>{
    const result = await BaseDatabase.connection(studentDataBase.TABLE_STUDENTS)
        .select()
        .where("name", "like",`%${name}%`)
    
        return result
        
  }

  public updateStudent = async (id: string, classId: string) => {
    await BaseDatabase.connection(studentDataBase.TABLE_STUDENTS)
        .where({id: id})
        .update({class_id: classId})
  }


}