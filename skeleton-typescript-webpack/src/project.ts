//this class models a gallery

export class Project {
  id:number;
  name:string;
  completion:string;
  url:string;
  src:string;
  static numProjects :number =0;

  constructor(pname:string, pdate:string, purl:string, psrc:string) { 
      this.name = pname;
      this.completion = pdate;
      this.url = purl;
      this.src = psrc;
      //when ever you want to access a static member of a class you have to proceed it with
      // the class name and dot operator
      this.id = Project.numProjects++;
  }

  
}
