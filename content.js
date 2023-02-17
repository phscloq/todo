import { Todo, Project } from "./classes";
import { projectSetting } from "./opens";

function showForm(){//onclick event for taskAddBtn
  document.getElementById('formDiv').style.display = 'flex';
      }


let i=0;
function displayProject(project){//This is for the initial load of the page, called in index.js
    const projectHTML = `<li class="project" id="${project.name}" data="${project.id}">${project.name}<div class="projectEdit" id="projectEdit"><button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div><div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">0/</div><div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
    i++;
  
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);

 }
 let j=0;
 function displayContent(project){

  console.log(project);
    let projectId;
 /*  if(typeof project === 'object'){
    console.log("project called"); */

 /*    } else {projectId = project;
        console.log("project called1");
    } */
    projectId =  Project.projects.findIndex((item) => item.id === project);
    console.log(projectId);
    console.log(Project.projects);
    console.log(Project.projects[projectId]);
   const tasksHTML = Project.projects[projectId].todos.map((todo, index) => `<div class="task" id="${Project.projects[projectId].todos[index].id}">
   <div class="task_title">${todo.title}</div><div class="taskR">
   <div class="task_date">${todo.dueDate}</div>
   <div class="taskSettings" id="taskSettings"><button class="deleteBtn" id="deleteTaskBtn">Delete</button><button class="editBtn" id="editTaskBtn">Edit</button></div>
   
   </div></div>`).join('');
 
   const taskAddHtml = document.createElement('div');
   taskAddHtml.classList.add('taskAdd');
    const taskAddBtn = document.createElement('button');
    taskAddBtn.textContent = 'New Task';
    taskAddBtn.setAttribute('id', 'taskAddBtn');
    taskAddBtn.classList.add('taskAddBtn');
    taskAddBtn.setAttribute('value', projectId);
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
    for (let j=0; j < Project.projects.length; j++){
      const { tasksHTML } = displayContent(Project.projects[j].id);
      document.querySelector('#task-container').innerHTML += tasksHTML;
    }
    const { taskAddHtml } = displayContent(Project.projects[0].id);
    document.querySelector('#task-container').appendChild(taskAddHtml);
  }

//Sidepanel related
function newProject(project){//Creating a new project, will also update task-container
    const projectHTML = `<li class="project" id="${project.name}" data="${project.id}">${project.name}<div class="projectEdit" id="projectEdit"><button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div><div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">0/</div><div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);
    document.getElementById('section-title').textContent = project.name;
    const {tasksHTML, taskAddHtml}=displayContent(project.id);
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

export {displayProject, displayContent, homeTab, newProject};