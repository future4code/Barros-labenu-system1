import { Users } from "./1_Users";

export class Teacher extends Users{
  expertise: string[];
  constructor(id: string,  name: string,  email: string, birth_date: string, class_id: string, expertise: string[]){
    super(id, name, email, birth_date, class_id)
    this.expertise = expertise;
  }
}