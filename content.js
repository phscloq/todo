import { Todo, Project } from "./classes";
import { projectSetting } from "./opens";
import { getIndex, sorting, sortByComplete, getTodaysTasks, getUpcomingTasks } from "./functions";

function showForm(){//onclick event for taskAddBtn
  document.getElementById('formDiv').style.display = 'flex';
      }



function displayProject(project){//This is for the initial load of the page, called in index.js
    const projectHTML = `<li class="project" id="${project.name}" data="${project.id}">
    <h3 class="prjName">${project.name}</h3>
    <div class="projectEdit" id="projectEdit">
    <button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div>
    <div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">${project.completedTasks}/</div>
    <div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
   
  
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);

 }

 function displayContent(projectIndex){
  //Works with index of project, not id
  
    sorting(projectIndex);
    sortByComplete(projectIndex);
   const tasksHTML = Project.projects[projectIndex].todos.map((todo, index) => {
  const taskPriority = todo.priority;

  const taskPriorityClass = taskPriority.toLowerCase();
   const taskClass = todo.completed ? 'task taskComplete' : 'task';
   return `<div class="${taskClass} ${taskPriorityClass}" id="${Project.projects[projectIndex].todos[index].id}" data-project="${Project.projects[projectIndex].id}">
   <div class="task_title">${todo.title}</div><div class="taskR">
   <div class="task_date">${todo.dueDate}</div>
   <div class="taskSettings" id="taskSettings"><button class="deleteBtn" id="deleteTaskBtn">Delete</button><button class="editBtn" id="editTaskBtn">Edit</button></div>
   
   </div></div>`}).join('');
 
   const taskAddHtml = document.createElement('div');
   taskAddHtml.classList.add('taskAdd');
    const taskAddBtn = document.createElement('button');
    taskAddBtn.textContent = 'New Task';
    taskAddBtn.setAttribute('id', 'taskAddBtn');
    taskAddBtn.classList.add('taskAddBtn');
    taskAddBtn.setAttribute('value', Project.projects[projectIndex].id);
    taskAddBtn.addEventListener('click', showForm);
    taskAddHtml.appendChild(taskAddBtn);
    return {
        tasksHTML,
        taskAddHtml
      };
}

function homeTab(){

    document.querySelector('#task-container').innerHTML = '';
    console.log("Home Tab");
    const allTaskArr = [];
    for (let j=0; j < Project.projects.length; j++){
      allTaskArr.push(...Project.projects[j].todos);
    }
    allTaskArr.sort((a, b) => {
      const priorityOrder = ['High', 'Medium', 'Low'];
      return priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);
    
    });
    allTaskArr.sort((a, b) => {
      return a.completed - b.completed;
  });
    const tasksHTML = allTaskArr.map((todo, index) => {
    
      const taskPriority = todo.priority;
  const taskPriorityClass = taskPriority.toLowerCase();
   const taskClass = todo.completed ? 'task taskComplete' : 'task';
   return `<div class="${taskClass} ${taskPriorityClass}" id="${allTaskArr[index].id}" data-project="${allTaskArr[index].project}">
   <div class="task_title">${todo.title}</div><div class="taskR">
   <div class="task_date">${todo.dueDate}</div>
   <div class="taskSettings" id="taskSettings"><button class="deleteBtn" id="deleteTaskBtn">Delete</button><button class="editBtn" id="editTaskBtn">Edit</button></div>
   
   </div></div>`

  }).join('');
  document.querySelector('#task-container').innerHTML = tasksHTML;
}

//Sidepanel related
function newProject(project){//Creating a new project, will also update task-container
    const projectHTML = `<li class="project" id="${project.name}" data="${project.id}">
    <h3 class="prjName">${project.name}</h3>
    <div class="projectEdit" id="projectEdit">
    <button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div>
    <div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">${project.completedTasks}/</div>
    <div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);
    document.getElementById('section-title').textContent = project.name;

    const {tasksHTML, taskAddHtml}=displayContent(getIndex(project.id));
    document.querySelector('#task-container').innerHTML = tasksHTML;
    document.querySelector('#task-container').appendChild(taskAddHtml);
    document.querySelectorAll('.projectEdit').forEach((element)=>{
        element.addEventListener('click', (event)=>{
            if(!document.querySelector('.projectSettings')){
                projectSetting(event.target);
            }
        });
    });
}
function todayTab(){
const todaysTasks = getTodaysTasks();
console.log(todaysTasks);
const tasksHTML = todaysTasks.map((todo, index) => {
    
  const taskPriority = todo.priority;
const taskPriorityClass = taskPriority.toLowerCase();
const taskClass = todo.completed ? 'task taskComplete' : 'task';
return `<div class="${taskClass} ${taskPriorityClass}" id="${todaysTasks[index].id}" data-project="${todaysTasks[index].project}">
<div class="task_title">${todo.title}</div><div class="taskR">
<div class="task_date">${todo.dueDate}</div>
<div class="taskSettings" id="taskSettings"><button class="deleteBtn" id="deleteTaskBtn">Delete</button><button class="editBtn" id="editTaskBtn">Edit</button></div>

</div></div>`

}).join('');
document.querySelector('#task-container').innerHTML = tasksHTML;
}
function upcomingTab(){
  const upcomingTasks = getUpcomingTasks();
  const tasksHTML = upcomingTasks.map((todo, index) => {
    
    const taskPriority = todo.priority;
  const taskPriorityClass = taskPriority.toLowerCase();
  const taskClass = todo.completed ? 'task taskComplete' : 'task';
  return `<div class="${taskClass} ${taskPriorityClass}" id="${upcomingTasks[index].id}" data-project="${upcomingTasks[index].project}">
  <div class="task_title">${todo.title}</div><div class="taskR">
  <div class="task_date">${todo.dueDate}</div>
  <div class="taskSettings" id="taskSettings"><button class="deleteBtn" id="deleteTaskBtn">Delete</button><button class="editBtn" id="editTaskBtn">Edit</button></div>
  
  </div></div>`
  
  }).join('');
  document.querySelector('#task-container').innerHTML = tasksHTML;
}
export {displayProject, displayContent, homeTab, newProject, todayTab, upcomingTab};