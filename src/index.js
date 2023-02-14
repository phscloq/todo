console.log("Working!");
import pageLoad from "./pageload";
import './style.css'
import { Todo, Project } from "../classes";
import {taskNumbers, deleteProject, deleteTask} from "../functions";
import { format } from "date-fns";
import {displayContent, homeTab, newProject} from "../content";
import {projectSetting} from "../opens";

pageLoad();
console.log(format(new Date(), "'Today is a' eeee"));

//
const home = document.getElementById('home');
const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projects = document.querySelectorAll('.project');
const sectionTitle = document.getElementById('section-title');



home.addEventListener('click', () => {
    console.log('home');
    sectionTitle.textContent = 'Home';
    homeTab();    
});
today.addEventListener('click', () => {
    console.log('today');
    sectionTitle.textContent = Project.projects[0].name;
    document.querySelector('#task-container').innerHTML ='';
});
upcoming.addEventListener('click', () => {
    console.log('upcoming');
    sectionTitle.textContent = 'Upcoming';
    document.querySelector('#task-container').innerHTML ='';    
});

//*******PROJECT ADDEDVENTLISTENERS*******
document.getElementById('projects-list').addEventListener('click', (event) => {
  if (event.target.classList.contains('project')) {
    console.log(event.target.id);
    sectionTitle.textContent = event.target.id;
    const {tasksHTML, taskAddHtml}= displayContent(event.target);
    document.querySelector('#task-container').innerHTML = tasksHTML;
   document.querySelector('#task-container').appendChild(taskAddHtml);
   
  }
 if (event.target.classList.contains('projectSettings')){
    console.log(event.target);
  }
  if(event.target.id === 'deletePrjBtn'){
    deleteProject(event.target.parentNode.parentNode);
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
                        const taskDueDate = document.getElementById('taskDueDate').value;
                        const taskPriority = document.getElementById('taskPriority').value;
                        const addTask = document.getElementById('taskAddBtn');
                        const projectName = document.getElementById('section-title').textContent;
                        
                        const task = new Todo(taskTitle, taskDescription, taskDueDate, taskPriority);
                                        //resetting the form
                                        document.getElementById("taskName").value = "";
                                        document.getElementById("taskDueDate").value = "";
                                        document.getElementById("taskDescription").value = "";
                                       

                        Project.projects[addTask.value].todos.push(task);
                        localStorage.setItem('projects', JSON.stringify(Project.projects));
                        const index = Project.projects.findIndex(x => x.name == projectName);
                        const {tasksHTML, taskAddHtml}= displayContent(index);
                        document.querySelector('#task-container').innerHTML = tasksHTML;
                        document.querySelector('#task-container').appendChild(taskAddHtml);

                        document.getElementById('formDiv').style.display = 'none';
                        taskNumbers(Project.projects[addTask.value]);

                 });
        

//New Project Add Form --
document.getElementById('projectSubmit').addEventListener('click', (event)=>{
    event.preventDefault();
    const projectName = document.getElementById('projectName').value;
    const project = new Project(projectName, `${Project.projects.length}`);
    localStorage.setItem('projects', JSON.stringify(Project.projects));
    newProject(project);
    document.getElementById('projectName').value = "";
   
  
});

document.querySelectorAll('.projectEdit').forEach((element)=>{
element.addEventListener('click', (event)=>{

    if(!document.querySelector('.projectSettings')){
    
        projectSetting(event.target);}
    
});
});
document.querySelector('.content').addEventListener('click', (event)=>{

   if(!event.target.closest('.projectSettings') && !event.target.closest('.projectEdit')){
    if(document.querySelector('.projectSettings')){
     document.querySelector('.projectSettings').remove();
   }}
});
/* 
document.querySelector('.taskAddBtn').addEventListener('click', (event)=>{
    event.preventDefault();
    showForm(event.target);
   
}); */
document.getElementById('task-container').addEventListener('click', (event)=>{
  
    if(event.target.id === 'deleteTaskBtn'){
     
        console.log(event.target.parentNode.parentNode.parentNode.parentNode);
        const taskArray = event.target.parentNode.parentNode.parentNode.parentNode.childNodes;
        const taskIndex = Array.from(taskArray).indexOf(event.target.parentNode.parentNode.parentNode);
       
  
        const index = Project.projects.findIndex(project => project.name === sectionTitle.textContent);
        deleteTask(index, taskIndex);
    }
});