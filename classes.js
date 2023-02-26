//creating todo model
import { displayProject } from "./content";
import { turnObjectToTodo } from "./functions";
class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.project = null;
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
        this.completedTasks = 0;
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
        Project.projects.forEach(x => {
            displayProject(x);
    });
}
}

const task1= new Todo('42', 'The meaning of 42', '01/01/2021', 'Low');
const task2= new Todo('Read the article', 'Take notes and highlight', '01/01/2021', 'Medium');
const task3= new Todo('Finish the project', 'Finish the project', '01/01/2021', 'High');
const task4= new Todo('write the paper', 'Finish the paper', '01/01/2021', 'Medium');
const task5= new Todo('Finish the ToDo App', 'Finish the todo app', '01/01/2021', 'High');
const task6= new Todo('Get Paid', 'lets earn some moneyyy', '15/02/2021', 'High');
const project1 = new Project('Study');
const project2 = new Project('Hobby');
const project3 = new Project('Work');

project1.addTodo(task2);
project1.addTodo(task4);
project2.addTodo(task1);
project3.addTodo(task3);
project3.addTodo(task5);
project3.addTodo(task6);

project1.todos[0].project=project1.name;
project1.todos[1].project=project1.name;
project2.todos[0].project=project2.name;
project3.todos[0].project=project3.name;
project3.todos[1].project=project3.name;
project3.todos[2].project=project3.name;

console.log(Project.projects);
/* Project.getProjects(); */

export  { Todo, Project};