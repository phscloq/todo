//Description: This file contains the functions that are used to create/OPEN the forms for adding new tasks and projects and form to edit them.
import { getIndex } from "./functions";
import { Project } from "./classes";
import {format, parse} from "date-fns";
function projectSetting(e){//onclick event for settingsBtn (...) for Project
        const prList= document.getElementById('projects-list');
       const data = e.parentNode.parentNode.parentNode.getAttribute('data');
        const computedStyle = getComputedStyle(prList);
                if(document.querySelector('.projectSettings')){
                        document.querySelector('.projectSettings').remove();
                }
            const editDiv = `<div class="projectSettings" id="projectSettings" data-pr="${data}"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
            if(e.classList.contains('editTxt')){
                if(computedStyle.display === 'flex'){//checking if it is in mobile view
                        
                        e.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML('afterend', editDiv);
                       document.getElementById('content-container').style.opacity = '0.5';
                }
                else{
            e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);}}
            else if(e.classList.contains('settingsBtn')){
                
                if(computedStyle.display === 'flex'){
                        console.log(computedStyle.display);
                        e.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
                        console.log(e.parentNode.parentNode.parentNode.parentNode);
                }
        else{e.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);}}
            
        }
function projectEdit(e){
        console.log('project edit called');
        const prList= document.getElementById('projects-list');
       
        const computedStyle = getComputedStyle(prList);
        console.log(e);
        const projectData = e.parentNode.getAttribute('data-pr');
        const pX = Project.projects.findIndex((project)=> project.id === projectData);
        const projectName = Project.projects[pX].name;
        console.log(projectName);
        const editDiv = `<div class="projectEditDiv" id="projectEditDiv" data=${projectData}>
        <form  id="projectEditForm"><input type="text" id="projectEditTitle" value="${projectName}">
        <div class="projectEditBtns" id="projectEditBtns"> 
        <button type="button" class="rename" id="rename">Rename</button>
        <button class="cancel" id="cancel">Cancel</button>
        </div></form></div>`;
 
       
        if(computedStyle.display === 'flex'){//checking if it is in mobile view
                 console.log(e);
          
                e.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
                document.getElementById('projectSettings').remove();
            
        }
        else{
                e.parentNode.parentNode.style.display = 'none';
                e.parentNode.parentNode.insertAdjacentHTML('afterend', editDiv);
        }
}
function taskEdit(e){//onclick event for editTaskBtn

        const taskId = e.parentNode.parentNode.parentNode.id;
        console.log(taskId);
        const projectName = e.parentNode.parentNode.parentNode.getAttribute('data-project');
        const {projectIndex, taskIndex }= getIndex(projectName, taskId);
       
        
      const theDate = parse(Project.projects[projectIndex].todos[taskIndex].dueDate, 'dd/MM/yyyy', new Date());
      const dueDate = format(theDate, 'yyyy-MM-dd');
        /* console.log(format(theDate, 'yyyy-MM-dd')); */
        const editDiv=`<div class=taskEdit id=taskEdit data=${Project.projects[projectIndex].todos[taskIndex].id} data-project=${projectName}>
        <form action="" id="taskEditForm">
        <div class="taskEditTitle"><input type="text" id="taskEditTitle" value=${Project.projects[projectIndex].todos[taskIndex].title}></div>
        <div class="taskEditDesc"><textarea id="taskEditDesc" cols="30" rows="10">${Project.projects[projectIndex].todos[taskIndex].description}</textarea></div>
        <div class="taskEditDueDate"><input type="date" id="taskEditDueDate" value=${dueDate}></div>
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
    

export {projectSetting, taskEdit, projectEdit};