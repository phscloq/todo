import {Project } from "./classes";
import { displayContent } from "./content";
import { homeTab } from "./content";
import { format, isFuture, parse } from "date-fns";
function taskNumbers(project){  
    const projectIndex = getIndex(project.id);

    
    document.getElementById(`${project.name}`).childNodes[5].childNodes[0].textContent = `${Project.projects[projectIndex].completedTasks}/`;
    document.getElementById(`${project.name}`).childNodes[5].childNodes[2].textContent = `${Project.projects[projectIndex].todos.length}`;
       
    }
    
    function deleteProject(project){
        const index = Project.projects.findIndex(x => x.id == project);
        Project.projects.splice(index, 1);
        localStorageUpdate();
        document.querySelector(`[data='${project}']`).remove();
        let y=index;
        if(index!=0){
        y=index-1;
        } 
        const lastProject = Project.projects[y].id;
        const {tasksHTML, taskAddHtml}= displayContent(getIndex(lastProject));
        document.querySelector('#section-title').textContent = Project.projects[y].name;
        document.querySelector('#task-container').innerHTML = tasksHTML;
        if(!document.querySelector('.taskAdd')){
            document.querySelector('#content-container').appendChild(taskAddHtml);
         }
    }
    function deleteTask(x, y){
        //x is the project index, y is the task index
        if(Project.projects[x].todos[y].completed){
            Project.projects[x].completedTasks--;
        }
        Project.projects[x].todos.splice(y, 1);
        localStorageUpdate();
        taskNumbers(Project.projects[x]);
        if(document.getElementById('section-title').textContent === 'Home'){homeTab();}
        else{
         
        const {tasksHTML, taskAddHtml}=displayContent(x);
        document.querySelector('#task-container').innerHTML = tasksHTML;
        if(!document.querySelector('.taskAdd') && document.getElementById('section-title').textContent==="Today"
        && document.getElementById('section-title').textContent==="Upcoming" ){
            document.querySelector('#content-container').appendChild(taskAddHtml);
         }}
    }
    function localStorageUpdate(){
        localStorage.setItem('projects', JSON.stringify(Project.projects));
    }
    
function taskComplete(e){

//code for changing style of e
const pName = e.getAttribute('data-project');
const tId = e.id;
const {projectIndex, taskIndex} = getIndex(pName, tId);
if(!e.classList.contains('taskComplete')){
    Project.projects[projectIndex].todos[taskIndex].completed=true;
    Project.projects[projectIndex].completedTasks++;
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
    const projectIndex = Project.projects.findIndex(x => x.id == project);
    if(task){
    const taskIndex = Project.projects[projectIndex].todos.findIndex(x => x.id == task);
    return {projectIndex, taskIndex};
    }else{return projectIndex};
   
}
function sorting(projectIndex){

    const pTodos = Project.projects[projectIndex].todos;
    pTodos.sort((a, b) => {
      const priorityOrder = ['High', 'Medium', 'Low'];
    return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    
    });
}
function sortByComplete(projectIndex){
    const pTodos = Project.projects[projectIndex].todos;
    pTodos.sort((a, b) => {
        return a.completed - b.completed;
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
todaysTasks.sort((a, b) => {
    return a.completed - b.completed;
});
return todaysTasks;
}
function getUpcomingTasks(){
    const allTasks = getAllTasks();

  
    const upcomingTasks = allTasks.filter((task) => {
        const dueDate = parse(task.dueDate, 'dd/MM/yyyy', new Date());
    
      if(isFuture(dueDate)){
        return task;
      }
      
    });
    upcomingTasks.sort((a, b) => {
        const [dayA, monthA, yearA] = a.dueDate.split('/');
        const [dayB, monthB, yearB] = b.dueDate.split('/');
        return new Date(`${monthA}/${dayA}/${yearA}`).getTime() - new Date(`${monthB}/${dayB}/${yearB}`).getTime();
    });
    upcomingTasks.sort((a, b) => {
        return a.completed - b.completed;
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
e.parentNode.parentNode.parentNode.remove();

document.querySelector(`[data='${projectData}']`).id = projectNewName;
document.querySelector(`[data='${projectData}']`).style.display = 'flex';
document.querySelector(`[data='${projectData}']`).childNodes[1].textContent = projectNewName;
}
function projectEditCancel(e){
    const projectData = e.parentNode.parentNode.parentNode.getAttribute('data');
  e.parentNode.parentNode.parentNode.remove();
  document.querySelector(`[data='${projectData}']`).style.display = 'flex';
}
function textareaAdjust(o) {
  
   o.style.height ="1px"
   o.style.height = (o.scrollHeight)+"px";
    if(o.style.height==="160px"){
        o.style.overflowY="scroll";
    }

  }
export {textareaAdjust, taskNumbers, deleteProject, deleteTask, taskComplete, getIndex, sorting, getAllTasks, getTodaysTasks, getUpcomingTasks, projectUpdate, projectEditCancel, sortByComplete};