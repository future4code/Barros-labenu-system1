//Classe Mãe
export abstract class Users {
    
  constructor (protected id: string, protected name: string, protected email: string, protected birth_date: string, protected class_id: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth_date = birth_date;
    this.class_id = class_id;
  }
  public getId(){
    return this.id;
  }

  public getName(){
    return this.name;
  }

  
  public getEmail(){
    return this.email;
  }

  public getBirth_date(){
    return this.birth_date;
  }

  public getClass_id(){
    return this.class_id;
  }

}