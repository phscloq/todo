console.log("Working!");
import pageLoad from "./pageload";
import './style.css'
import { Todo, Project } from "../classes";
import {taskNumbers, deleteProject, deleteTask, taskComplete, getIndex, projectEditCancel, projectUpdate} from "../functions";
import { format, getDate } from "date-fns";
import {displayContent, homeTab, newProject, todayTab, upcomingTab} from "../content";
import {projectSetting, taskEdit, projectEdit} from "../opens";

pageLoad();
const prList= document.getElementById('projects-list');


console.log(format(new Date(), "'Today is a' eeee"));
const date = new Date();
const todays = format(date, "dd/MM/yyyy");
console.log(todays);


const home = document.getElementById('home');
const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projectSection = document.getElementById('projectSectionTitle');
const sectionTitle = document.getElementById('section-title');
projectSection.addEventListener('click', () => {
    const computedStyle = getComputedStyle(prList);
    if(computedStyle.display === 'none'){
        prList.style.display = 'flex';
        document.querySelector('.newProjectFormDiv').style.display = 'block';
    }
    else if(computedStyle.display === 'flex'){
        prList.style.display = 'none';
        document.querySelector('.newProjectFormDiv').style.display = 'none';}
 });  





home.addEventListener('click', () => {
    console.log('home');
    sectionTitle.textContent = 'Home';
    homeTab();    
});
today.addEventListener('click', () => {
    console.log('today');
    sectionTitle.textContent = 'Today';
    document.querySelector('#task-container').innerHTML ='';
    todayTab();
});
upcoming.addEventListener('click', () => {
    console.log('upcoming');
    sectionTitle.textContent = 'Upcoming';
    document.querySelector('#task-container').innerHTML ='';   
    upcomingTab();
});

//*******PROJECT ADDEDVENTLISTENERS*******
document.getElementById('projects-list').addEventListener('click', (event) => {

  if (event.target.classList.contains('prjName')) {
    
    sectionTitle.textContent = event.target.parentNode.id;
    
    const projectName = event.target.parentNode.id;

    const {tasksHTML, taskAddHtml}= displayContent(getIndex(projectName));
    document.querySelector('#task-container').innerHTML = tasksHTML;
   document.querySelector('#task-container').appendChild(taskAddHtml);
   
  }
});


                //*******FORM ADDEDVENTLISTENERS*******
//Cancel Button
document.getElementById('formBtnCancel').addEventListener('click', (e) => {
    e.preventDefault();
    try{
    document.getElementById('formDiv').style.display = 'none';}
    catch(error){
        console.log(error.message);
    }
    });

        //New Task Add Form --
        //takes the inputs and creates a new task object and adds it to the project's todo array
        //and update the content
                  document.querySelector('.formBtnAdd').addEventListener('click', (event)=>{
                        event.preventDefault();
                    
                        const taskTitle = document.getElementById('taskName').value;
                        const taskDescription = document.getElementById('taskDescription').value;
                        const taskDueDate =  format(new Date(document.getElementById('taskDueDate').value), "dd/MM/yyyy");
                       
                        const taskPriority = document.getElementById('taskPriority').value;
             
                        const projectName = document.getElementById('section-title').textContent;
  
                        const projectIndex = getIndex(projectName);
                    
                        const task = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
                        console.log(task)
                        console.log(task instanceof Todo);
                                        //resetting the form
                                        document.getElementById("taskName").value = "";
                                        document.getElementById("taskDueDate").value = "";
                                        document.getElementById("taskDescription").value = "";

                        console.log(projectName);
                        task.project = Project.projects[projectIndex].name;
                        Project.projects[projectIndex].todos.push(task);
                        localStorage.setItem('projects', JSON.stringify(Project.projects));
                        //from the section title, find the project index

                        const {tasksHTML, taskAddHtml}= displayContent(projectIndex);
                        document.querySelector('#task-container').innerHTML = tasksHTML;
                        document.querySelector('#task-container').appendChild(taskAddHtml);

                        document.getElementById('formDiv').style.display = 'none';
                        taskNumbers(Project.projects[projectIndex]);

                 });
        

//New Project Add Form --
document.getElementById('projectSubmit').addEventListener('click', (event)=>{
    event.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const project = new Project(projectName);
    localStorage.setItem('projects', JSON.stringify(Project.projects));
    newProject(project);
    document.getElementById('projectName').value = "";
   
  
});

document.querySelectorAll('.projectEdit').forEach((element)=>{
element.addEventListener('click', (event)=>{
    projectSetting(event.target);  
});

});
document.querySelector('.content').addEventListener('click', (event)=>{
        //If its not the project settings or the project edit button (so the user could open settings window)
            if(!event.target.closest('.projectSettings') && !event.target.closest('.projectEdit')){
                if(document.querySelector('.projectSettings')){
                document.querySelector('.projectSettings').remove();
                document.getElementById('content-container').style.opacity = '1';
            }}
   //Clicking anywhere outside of task edit form will close the task edit form and saves the changes
        if(!event.target.closest('.taskSettings') && !event.target.closest('#taskEditForm')){
            if(document.querySelector('.taskEdit')){
            document.querySelector('.taskEdit').style.display = 'none';
                const taskTitle = document.getElementById('taskEditTitle').value;
                const taskDescription = document.getElementById('taskEditDesc').value;
                const taskDueDate = document.getElementById('taskEditDueDate').value;
                const formatedDueDate = format(new Date(taskDueDate), "dd/MM/yyyy");
                const taskPriority = document.getElementById('taskEditPriority').value;
                const taskId = document.getElementById('taskEdit').getAttribute('data');
                const projectName = document.getElementById('taskEdit').getAttribute('data-project');
                document.querySelector('.taskEdit').remove();
                const {projectIndex, taskIndex} = getIndex(projectName, taskId);


                Project.projects[projectIndex].todos[taskIndex].title = taskTitle;
                Project.projects[projectIndex].todos[taskIndex].description = taskDescription;
                Project.projects[projectIndex].todos[taskIndex].dueDate = formatedDueDate;
                Project.projects[projectIndex].todos[taskIndex].priority = taskPriority;
                localStorage.setItem('projects', JSON.stringify(Project.projects));
               
                if(document.getElementById('section-title').textContent === 'Home'){homeTab();
                 
                }
                else {
                
                const {tasksHTML, taskAddHtml}= displayContent(projectIndex);
                document.querySelector('#task-container').innerHTML = tasksHTML;
                document.querySelector('#task-container').appendChild(taskAddHtml);}
            }}
       //------------------Task Settings------------------
       if(document.getElementById('projectSettings')){
        document.querySelector('.projectSettings').addEventListener('click', (event)=>{
           
            if(event.target.id === 'deletePrjBtn'){
     
                const data = event.target.parentNode.getAttribute('data-pr');
            
                deleteProject(data);
              }
              if(event.target.id === 'editPrjBtn'){
                console.log(event.target);
                console.log('clicked');
                projectEdit(event.target);
            }
        
        
        });}
        if(document.getElementById('projectEditDiv')){
            document.querySelector('.projectEditDiv').addEventListener('click', (event)=>{
                if(event.target.id === 'rename'){
                    console.log("rename");
                    projectUpdate(event.target);
                    document.getElementById('content-container').style.opacity = '1';
                }
                if(event.target.id === 'cancel'){
                    projectEditCancel(event.target);
                    document.getElementById('content-container').style.opacity = '1';
                }

            });

        }

});

document.getElementById('task-container').addEventListener('click', (event)=>{
  
    if(event.target.id === 'deleteTaskBtn'){
     
        const data = event.target.parentNode.parentNode.parentNode.id;
        const projectName = event.target.parentNode.parentNode.parentNode.getAttribute('data-project');
        console.log(event.target.parentNode.parentNode.parentNode);
        const {projectIndex, taskIndex} = getIndex(projectName, data);
        deleteTask(projectIndex, taskIndex);
    }
if(event.target.classList.contains('task')){
taskComplete(event.target);
}

    if(event.target.id === 'editTaskBtn'){
        event.preventDefault();
        if(document.querySelector('.taskEdit')){
        document.querySelector('.taskEdit').remove();}
               //get data-project
               console.log("Looking for data-project");
               console.log(event.target.parentNode.parentNode.parentNode.getAttribute('data-project'));
        taskEdit(event.target);

    }
});

