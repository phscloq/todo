//Description: This file contains the functions that are used to create/OPEN the forms for adding new tasks and projects and form to edit them.



function projectSetting(e){//onclick event for settingsBtn (...) for Project

            const editDiv = `<div class="projectSettings" id="projectSettings"><button class="deleteBtn" id="deletePrjBtn">Delete</button><button class="editBtn" id="editPrjBtn">Edit</button></div>`;
            e.parentNode.parentNode.parentNode.insertAdjacentHTML('beforeend', editDiv);
        }

export {projectSetting};