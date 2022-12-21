import { TUser } from "../model/User"
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
}