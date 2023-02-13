import { Todo, Project } from "./classes";

let homeClick = false;
let lastProject = false;
function showForm(){
    document.getElementById('formDiv').style.display = 'flex';
        }

function displayContent(project){
    let projectId;
  if(homeClick!=true){
    console.log("Homeclick is false");
  projectId = project.value;}
   else{projectId = project;
    console.log("Homeclick is true");}

   const tasksHTML = Project.projects[projectId].todos.map(todo => `<div class="task">
   <div class="task_title">${todo.title}</div>
   <div class="task_date">${todo.dueDate}</div>
   </div>`).join('');
   console.log(Project.projects[projectId].todos.length);
   const taskAddHtml = document.createElement('div');
   taskAddHtml.classList.add('taskAdd');

    const taskAddBtn = document.createElement('button');
    taskAddBtn.textContent = 'New Task';
    taskAddBtn.setAttribute('id', 'taskAddBtn');
    taskAddBtn.classList.add('taskAddBtn');
    taskAddBtn.setAttribute('value', projectId);
    taskAddBtn.addEventListener('click', showForm);
    taskAddHtml.appendChild(taskAddBtn);
    if(homeClick!=true){
   document.querySelector('#task-container').innerHTML = tasksHTML;
   document.querySelector('#task-container').appendChild(taskAddHtml);}
   else{
    document.querySelector('#task-container').innerHTML += tasksHTML;
   }
   if(lastProject){ document.querySelector('#task-container').appendChild(taskAddHtml); lastProject = false;}
  homeClick = false;
}
/*When adding new task update the project task page */
    function updateContent (project){
    const projectId = document.getElementById(project).value;
    const tasksHTML = Project.projects[projectId].todos.map(todo => `<div class="task">
    <div class="task_title">${todo.title}</div>
    <div class="task_date">${todo.dueDate}</div>
    </div>`).join('');
 /*    const taskAddBtn = `<div class="taskAdd"><button onclick="showForm()" class="taskAddBtn" id="taskAddBtn" value="${projectId}">New Task</button></div>`;
    
 */
 const taskAddHtml = document.createElement('div');
 taskAddHtml.classList.add('taskAdd');

  const taskAddBtn = document.createElement('button');
  taskAddBtn.textContent = 'New Task';
  taskAddBtn.setAttribute('id', 'taskAddBtn');
  taskAddBtn.classList.add('taskAddBtn');
  taskAddBtn.setAttribute('value', projectId);
  taskAddBtn.addEventListener('click', showForm);
  taskAddHtml.appendChild(taskAddBtn);

 document.querySelector('#task-container').innerHTML = tasksHTML;
  document.querySelector('#task-container').appendChild(taskAddHtml);
console.log(Project.projects);
    /* document.querySelector('#task-container').innerHTML+= taskAddBtn; */
    }





let i=0;
function displayProject(project){
    const projectHTML = `<li class="project" id="${project.name}" value="${i}">${project.name}<div class="projectEdit" id="projectEdit"><button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div><div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">0/</div><div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
    i++;
  
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);

 }
function newProject(project){
    const projectHTML = `<li class="project" id="${project.name}" value="${project.id}">${project.name}<div class="projectEdit" id="projectEdit"><button class="settingsBtn" id="settingsBtn"><span class="editTxt">...</span></button></div><div class="taskNumbers" id="taskNumbers"><div class="completed" id="completed">0/</div><div class="totalTasks" id="totalTasks">${project.todos.length}</div></div></li>`;
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);
    document.getElementById('section-title').textContent = project.name;
    document.querySelector('#task-container').innerHTML = '';
    const taskAddHtml = ` <div class="taskAdd"><button onclick="showForm()" class="taskAddBtn" id="taskAddBtn" value="${project.id}">New Task</button></div>`;
    document.querySelector('#task-container').innerHTML = taskAddHtml;
    
}

 
function homeTab(){
    document.querySelector('#task-container').innerHTML = '';
    console.log("Home Tab");
for (let j=0; j < Project.projects.length; j++){
    console.log(Project.projects[j]);
    homeClick = true;
    if(Project.projects.length-1 == j){
        lastProject = true;
    }
displayContent(Project.projects[j].id);

}
}

function taskNumbers(project){

document.getElementById(`${project.name}`).childNodes[1].childNodes[1].textContent = `${project.todos.length}`;
}

function deleteProject(project){
   console.log(project.value);
    Project.projects.splice(project.value, 1);
    console.log(Project.projects);
    localStorageUpdate();
}
function localStorageUpdate(){
    localStorage.setItem('projects', JSON.stringify(Project.projects));
}
function projectEdit(e){
    const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deleteBtn">Delete</button><button class="editBtn" id="editBtn">Edit</button></div>`;
    e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
}
export { displayContent, displayProject, updateContent, homeTab, newProject, taskNumbers, deleteProject,projectEdit};
