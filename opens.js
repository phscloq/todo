//Description: This file contains the functions that are used to create/OPEN the forms for adding new tasks and projects and form to edit them.
import { getIndex } from "./functions";
import { Project } from "./classes";

function projectSetting(e){//onclick event for settingsBtn (...) for Project
                if(document.querySelector('.projectSettings')){
                        document.querySelector('.projectSettings').remove();
                }
            const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
            if(e.classList.contains('editTxt')){
            e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);}
            else if(e.classList.contains('settingsBtn')){
                e.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);}
            
        }
function projectEdit(e){
        
}
function taskEdit(e){//onclick event for editTaskBtn

        const taskId = e.parentNode.parentNode.parentNode.id;
        console.log(taskId);
        const projectName = e.parentNode.parentNode.parentNode.getAttribute('data-project');
        const {projectIndex, taskIndex }= getIndex(projectName, taskId);
     
        const editDiv=`<div class=taskEdit id=taskEdit data=${Project.projects[projectIndex].todos[taskIndex].id} data-project=${projectName}>
        <form action="" id="taskEditForm">
        <div class="taskEditTitle"><input type="text" id="taskEditTitle" value=${Project.projects[projectIndex].todos[taskIndex].title}></div>
        <div class="taskEditDesc"><textarea id="taskEditDesc" cols="30" rows="10">${Project.projects[projectIndex].todos[taskIndex].description}</textarea></div>
        <div class="taskEditDueDate"><input type="date" id="taskEditDueDate" value=${Project.projects[projectIndex].todos[taskIndex].dueDate}></div>
        <div class="taskEditPriority"><select id="taskEditPriority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>      
        </select></div></form>
        </div>`;
 
        
        console.log("Priority:");

        console.log(e);
        //append it to body
        const content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', editDiv);
        console.log(Project.projects[projectIndex].todos[taskIndex].priority);
        document.getElementById('taskEditPriority').value = Project.projects[projectIndex].todos[taskIndex].priority;
        
         
        }
    

export {projectSetting, taskEdit};