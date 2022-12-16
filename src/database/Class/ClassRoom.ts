export class ClassRoom{
  constructor(private id: string, private name: string, private teachers: string, private students: string, private modules: string){
    this.id = id;
    this.name = name;
    this.teachers = teachers;
    this.students = students;
    this.modules = modules;
  }
  
}