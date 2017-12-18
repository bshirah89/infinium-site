import {Project} from './project';

export class Portfolio {
    heading = 'Infinium\'s Porfolio';
    projects : Project[] = [];
    projectName:string;
    projectCompletion:string;
    projectUrl:string;
    projectSrc:string;
    addProject(){
        //push new project on too projects arrays
        this.projects.push(new Project(this.projectName,this.projectCompletion,this.projectUrl,this.projectSrc));
        // clear properties
        this.projectName = "";
        this.projectCompletion = "";
        this.projectUrl = "";
        this.projectSrc = "";

    }
    // addTodo() {
    //     if (this.todoDescription) {
    //       this.todos.push(new Todo(this.todoDescription));
    //       this.todoDescription = '';
    //     }
    //   }
}
