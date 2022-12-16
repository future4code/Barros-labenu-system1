import { Users } from "./1_Users";

export class Students extends Users{
  hobby: string[];
  constructor(id: string,  name: string,  email: string, birth_date: string, class_id: string, hobby: string[]){
    super(id, name, email, birth_date, class_id)
    this.hobby = hobby;
  }
}