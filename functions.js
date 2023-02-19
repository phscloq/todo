import { Todo, Project } from "./classes";
import { displayContent } from "./content";


function taskNumbers(project){  
/*     document.getElementById(`${project.name}`).childNodes[2].childNodes[0].textContent = `${completedTasks}/`; */
    document.getElementById(`${project.name}`).childNodes[2].childNodes[1].textContent = `${project.todos.length}`;
    const projectIndex = getIndex(project.name);
    document.getElementById(`${project.name}`).childNodes[2].childNodes[0].textContent = `${Project.projects[projectIndex].completedTasks}/`;
    }
    
    function deleteProject(project){
  
        const index = Project.projects.findIndex(x => x.id == project);
        
        Project.projects.splice(index, 1);
        console.log(Project.projects);
        localStorageUpdate();
        console.log(project);
       /*  console.log(document.querySelector(`[data='${project}']`)); */
        document.querySelector(`[data='${project}']`).remove();
   
        console.log("This is index:");
        console.log(index);
        let y=index;
        if(index!=0){
        y=index-1;
        } 
        console.log("This is y:");
        console.log(y);
        const lastProject = Project.projects[y].name;
        const {tasksHTML, taskAddHtml}= displayContent(getIndex(lastProject));
        document.querySelector('#section-title').textContent = Project.projects[y].name;
        document.querySelector('#task-container').innerHTML = tasksHTML;
        document.querySelector('#task-container').appendChild(taskAddHtml);
    }
    function deleteTask(x, y){
        Project.projects[x].todos.splice(y, 1);
        console.log(Project.projects);
        localStorageUpdate();
        taskNumbers(Project.projects[x]);
        const {tasksHTML, taskAddHtml}=displayContent(x);
        document.querySelector('#task-container').innerHTML = tasksHTML;
        document.querySelector('#task-container').appendChild(taskAddHtml);
    }
    function localStorageUpdate(){
        localStorage.setItem('projects', JSON.stringify(Project.projects));
    }
    
function taskComplete(e){
console.log(e);
//code for changing style of e
const pName = e.parentNode.parentNode.childNodes[0].textContent;
const tId = e.id;
const {projectIndex, taskIndex} = getIndex(pName, tId);
console.log(Project.projects[projectIndex].todos[taskIndex] instanceof Todo);
if(!e.classList.contains('taskComplete')){
    Project.projects[projectIndex].todos[taskIndex].completed=true;
    Project.projects[projectIndex].completedTasks++;
    console.log(Project.projects[projectIndex].completedTasks);
e.classList.add('taskComplete');}
else{
    Project.projects[projectIndex].todos[taskIndex].completed=false;
    e.classList.remove('taskComplete');
    Project.projects[projectIndex].completedTasks--;
}

localStorageUpdate();
taskNumbers(Project.projects[projectIndex]);

}

function getIndex (project, task){
    //Pass the project name and the task id to get the index of the project and the task
    const projectIndex = Project.projects.findIndex(x => x.name == project);
    if(task){
    const taskIndex = Project.projects[projectIndex].todos.findIndex(x => x.id == task);
    return {projectIndex, taskIndex};
    }else{return projectIndex};
   
}
function turnObjectToTodo(object){
    console.log("turning object to todo");
    console.log(object);
    const task = new Todo();
  Object.assign(task, object);
  console.log(task);
  localStorageUpdate();
  return task;
}
export {taskNumbers, deleteProject, deleteTask, taskComplete, getIndex, turnObjectToTodo};