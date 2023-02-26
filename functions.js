import { Todo, Project } from "./classes";
import { displayContent } from "./content";
import { homeTab } from "./content";
import { format, getDate, isFuture, parseISO } from "date-fns";
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
        //x is the project index, y is the task index
        Project.projects[x].todos.splice(y, 1);
        console.log(Project.projects);
        localStorageUpdate();
        taskNumbers(Project.projects[x]);
        if(document.getElementById('section-title').textContent === 'Home'){homeTab();}
        else if(!document.getElementById('section-title').textContent === 'Home'){
         
        const {tasksHTML, taskAddHtml}=displayContent(x);
        document.querySelector('#task-container').innerHTML = tasksHTML;
        document.querySelector('#task-container').appendChild(taskAddHtml);}
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
function sorting(projectIndex){

    const pTodos = Project.projects[projectIndex].todos;
    pTodos.sort((a, b) => {
      const priorityOrder = ['High', 'Medium', 'Low'];
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    
    });

}
function getAllTasks(){
    let allTasks = [];
    Project.projects.forEach(project => {
        project.todos.forEach(task => {
            allTasks.push(task);
        });
    });
    return allTasks;
}
function getTodaysTasks(){
    const allTasks = getAllTasks();

const date = new Date();
const todaysDate = format(date, 'dd/MM/yyyy');
const todaysTasks = allTasks.filter((task) => {
  if(task.dueDate === todaysDate){
    return task;
  }
  
});
todaysTasks.sort((a, b) => {
    const priorityOrder = ['High', 'Medium', 'Low'];
    return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
});
return todaysTasks;
}
function getUpcomingTasks(){
    const allTasks = getAllTasks();
    const date = new Date();
    const todaysDate = format(date, 'dd/MM/yyyy');
    const upcomingTasks = allTasks.filter((task) => {
    
      if(isFuture(new Date(task.dueDate))){
        
        return task;
      }
      
    });
    upcomingTasks.sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
    });
    return upcomingTasks;
}
function projectUpdate(e){
const projectData = e.parentNode.parentNode.parentNode.getAttribute('data');
const projectX = Project.projects.findIndex(x => x.id == projectData);
const projectNewName = e.parentNode.parentNode.childNodes[0].value;
Project.projects[projectX].name = projectNewName;
localStorageUpdate();

const {tasksHTML, taskAddHtml}= displayContent(projectX);
document.querySelector('#section-title').textContent = Project.projects[projectX].name;
document.querySelector('#task-container').innerHTML = tasksHTML;
document.querySelector('#task-container').appendChild(taskAddHtml);
/* const projectHTML = `<li class="project" id="${project.name}" data="${project.id}">${project.name}<div class="projectEdit" id="projectEdit">
<button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div><div class="taskNumbers" id="taskNumbers">
<div class="completed" id="completed">0/</div><div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`; */
e.parentNode.parentNode.parentNode.remove();

document.querySelector(`[data='${projectData}']`).id = projectNewName;
document.querySelector(`[data='${projectData}']`).style.display = 'flex';
document.querySelector(`[data='${projectData}']`).childNodes[0].textContent = projectNewName;
}
function projectEditCancel(e){
    const projectData = e.parentNode.parentNode.parentNode.getAttribute('data');
  e.parentNode.parentNode.parentNode.remove();
  document.querySelector(`[data='${projectData}']`).style.display = 'flex';
}
export {taskNumbers, deleteProject, deleteTask, taskComplete, getIndex, turnObjectToTodo, sorting, getAllTasks, getTodaysTasks, getUpcomingTasks, projectUpdate, projectEditCancel};