import { TclassRoom } from "../model/ClassRoom";
import { BaseDatabase } from "./BaseDatabase";

export class ClassDataBase extends BaseDatabase {
  protected static TABLE_CLASS = "Labe_Classroom"

  public createClass= async (id: string, name: string) =>{
    const newClass: TclassRoom = {
      id, 
      name
    }
    await BaseDatabase.connection(ClassDataBase.TABLE_CLASS).insert(newClass)
  }
}

