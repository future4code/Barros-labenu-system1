export class ClassRoom{
  constructor(private id: string, private name: string, private modules?: string){
    this.id = id;
    this.name = name;
    this.modules = modules;
  }
  public getId(){
    return this.id;
  }

  public getName(){
    return this.name;
  }


  public getModules(){
    return this.modules;
  }
  
}