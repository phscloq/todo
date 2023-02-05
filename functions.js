import { Todo, Project } from "./classes";

function showForm(){
    document.getElementById('formDiv').style.display = 'flex';
        }

function displayContent(project){
  
   const projectId = project.value;
   
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
    taskAddBtn.addEventListener('click', showForm);
    taskAddHtml.appendChild(taskAddBtn);
   document.querySelector('#task-container').innerHTML ='';
   document.querySelector('#task-container').innerHTML = tasksHTML;
    document.querySelector('#task-container').appendChild(taskAddHtml);
   
}



/* const projectSection = document.getElementById('projects-list');

export function displayProject(project){
    for(let i = 0; i < project.todos.length; i++){
    console.log(`Project Name: ${project.name} `);
    console.log(`Todos: ${project.todos[i].title} `);
    console.log(`Description: ${project.todos[i].description} `);
    console.log('-----------------');
    createProject(project);

}
}
 */
let i=0;
function displayProject(project){
    const projectHTML = `<li class="project" id="${project.name}" value="${i}">${project.name}</li>`;
    i++;
    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);
 }
export { displayContent, displayProject};
