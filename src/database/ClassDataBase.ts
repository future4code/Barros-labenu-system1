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

  

  public searchActiveClass = async () => {
    const result = await BaseDatabase.connection(ClassDataBase.TABLE_CLASS)
        .select()
        .where("module", "not like", "0")
        return result;
  }

  public updateClass = async (className: string, module: string) => {
    await BaseDatabase.connection(ClassDataBase.TABLE_CLASS)
    .where({name: className})
    .update({module:module})
  }



}

