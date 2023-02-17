//Description: This file contains the functions that are used to create/OPEN the forms for adding new tasks and projects and form to edit them.
import { getIndex } from "./functions";
import { Project } from "./classes";

function projectSetting(e){//onclick event for settingsBtn (...) for Project

            const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
            e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
        }

function taskEdit(e){//onclick event for editTaskBtn

        const taskId = e.parentNode.parentNode.parentNode.id;

        const projectName = e.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].textContent;
        const {projectIndex, taskIndex }= getIndex(projectName, taskId);
     
        const editDiv=`<div class=taskEdit id=taskEdit>
        <form action="" id="taskEditForm">
        <div class="taskEditTitle"><input type="text" id="taskEditTitle" value=${Project.projects[projectIndex].todos[taskIndex].title} ></div>
        <div class="taskEditDesc"><textarea id="taskEditDesc" cols="30" rows="10">${Project.projects[projectIndex].todos[taskIndex].description}</textarea></div>
        <div class="taskEditDueDate"><input type="date" id="taskEditDueDate" value=${Project.projects[projectIndex].todos[taskIndex].dueDate}></div>
        <div class="taskEditPriority"><select id="taskEditPriority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>      
        </select></div></form>
        </div>`;
        if(document.querySelector('#taskEditPriority')){
         document.querySelector('#taskEditPriority').value=Project.projects[projectIndex].todos[taskIndex].priority;
        }
        console.log(e);
        //append it to body
        const content = document.querySelector('.content');
        content.insertAdjacentHTML('beforeend', editDiv);
        }
    

export {projectSetting, taskEdit};