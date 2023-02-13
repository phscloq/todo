import { Todo, Project } from "./classes";

let homeClick = false;
let lastProject = false;
function showForm(){
    document.getElementById('formDiv').style.display = 'flex';
        }

function displayContent(project){
  

    let projectId;
  if(typeof project === 'object'){
    console.log("project called");
    projectId =  Project.projects.findIndex((item) => item.name === project.id);
    } else {projectId = project;
        console.log("project called1");
    }
    console.log(projectId);
    console.log(Project.projects);
    console.log(Project.projects[projectId]);
   const tasksHTML = Project.projects[projectId].todos.map(todo => `<div class="task">
   <div class="task_title">${todo.title}</div>
   <div class="task_date">${todo.dueDate}</div>
   </div>`).join('');
 
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
   /* document.querySelector('#task-container').innerHTML = tasksHTML;
   document.querySelector('#task-container').appendChild(taskAddHtml); */
 
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
    const {tasksHTML, taskAddHtml}=displayContent(project.id);
    document.querySelector('#task-container').innerHTML = tasksHTML;
    document.querySelector('#task-container').appendChild(taskAddHtml);
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

function taskNumbers(project){

document.getElementById(`${project.name}`).childNodes[2].childNodes[1].textContent = `${project.todos.length}`;
}

function deleteProject(project){
   const index = Project.projects.findIndex(x => x.name == project.id);
    Project.projects.splice(index, 1);
    console.log(Project.projects);
    localStorageUpdate();
    document.getElementById(project.id).remove();
    
    const {tasksHTML, taskAddHtml}= displayContent(index);
    document.querySelector('#section-title').textContent = Project.projects[index].name;
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
function projectEdit(e){
    const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
    e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
}
export { displayContent, displayProject, updateContent, homeTab, newProject, taskNumbers, deleteProject, deleteTask,projectEdit, showForm};