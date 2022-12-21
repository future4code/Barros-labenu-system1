import { TteacherExpertise } from "../model/TeacherExpertise";
import { TUser } from "../model/User";
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

}