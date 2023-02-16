//Description: This file contains the functions that are used to create/OPEN the forms for adding new tasks and projects and form to edit them.



function projectSetting(e){//onclick event for settingsBtn (...) for Project

            const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
            e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
        }

function taskEdit(e){//onclick event for editTaskBtn

        console.log(e.parentNode.parentNode.parentNode);
        const editDiv=`<div class=taskEdit id=taskEdit>
        <form action="" id="taskEditForm">
        <div class="taskEditTitle"><input type="text" id="taskEditTitle"></div>
        <div class="taskEditDesc"><textarea id="taskEditDesc" cols="30" rows="10"></textarea></div>
        <div class="taskEditDueDate"><input type="date" id="taskEditDueDate"></div>
        <div class="taskEditPriority"><select id="taskEditPriority">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        </select></div></form>
        </div>`;
        //append it to body
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', editDiv);
        }
    

export {projectSetting, taskEdit};