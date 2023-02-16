import { Todo, Project } from "./classes";
import { displayContent } from "./content";


function taskNumbers(project){

    document.getElementById(`${project.name}`).childNodes[2].childNodes[1].textContent = `${project.todos.length}`;
    }
    
    function deleteProject(project){
      /*   console.log(Project.projects);
        console.log(Project.projects.findIndex(x => x.name == project.id)); */
        const index = Project.projects.findIndex(x => x.id == project);

        Project.projects.splice(index, 1);
        console.log(Project.projects);
        localStorageUpdate();
        document.querySelector(`[data=${project}]`).remove();
   
        console.log("This is index:");
        console.log(index);
        let y=index;
        if(index!=0){
        y=index-1;
        } 
        console.log("This is y:");
        console.log(y);
        const {tasksHTML, taskAddHtml}= displayContent(y);
        document.querySelector('#section-title').textContent = Project.projects[y].name;
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
    
function taskComplete(e){
console.log(e);
//code for changing style of e
if(!e.classList.contains('taskComplete')){
e.classList.add('taskComplete');}
else{
    e.classList.remove('taskComplete');
}




}
export {taskNumbers, deleteProject, deleteTask, taskComplete};