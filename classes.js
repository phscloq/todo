//creating todo model
import { displayProject } from "./content";
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.id = Math.random().toString(36).substring(2, 9);
    }
    changePriority(newPriority) {
        this.priority = newPriority;
    }
    completeTodo() {
        this.completed = true;
      }
      uncompleteTodo() {
        this.completed = false;
      }
}
class Project {
    static projects = [];
    constructor(name) {
        this.id=Math.random().toString(36).substring(2, 9);
        this.name = name;
        this.todos = [];
        Project.projects.push(this);
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    static getProjects() {
        const projects=JSON.parse(localStorage.getItem('projects'));
        if(projects){
            Project.projects=projects;
        }
        Project.projects.forEach(project => {
            displayProject(project);
    });
}
}


const task1= new Todo('42', 'The meaning of 42', '2021-01-01', 'low');
const task2= new Todo('Read the article', 'Take notes and highlight', '2021-01-01', 'high');
const task3= new Todo('Finish the project', 'Finish the project', '2021-01-01', 'high');
const project1 = new Project('Study');
const project2 = new Project('Hobby');
const project3 = new Project('Work');
project1.addTodo(task1);
project1.addTodo(task2);
project2.addTodo(task2);
project3.addTodo(task3);
project3.addTodo(task1);
project3.addTodo(task2);

console.log(Project.projects);
/* Project.getProjects(); */

export  { Todo, Project};