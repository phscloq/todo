console.log("Working!");
import pageLoad from "./pageload";
import './style.css'
import { Todo, Project } from "../classes";
import { displayContent, showForm } from "../functions";

pageLoad();


//
const home = document.getElementById('home');
const today = document.getElementById('today');
const upcoming = document.getElementById('upcoming');
const projects = document.querySelectorAll('.project');
const sectionTitle = document.getElementById('section-title');



home.addEventListener('click', () => {
    console.log('home');
    sectionTitle.textContent = 'Home';
});
today.addEventListener('click', () => {
    console.log('today');
    sectionTitle.textContent = Project.projects[0].name;
});
upcoming.addEventListener('click', () => {
    console.log('upcoming');
    sectionTitle.textContent = 'Upcoming';
});

projects.forEach(project => {
    project.addEventListener('click', () => {
        console.log(project.id);
        sectionTitle.textContent = project.id;
        displayContent(project);
    });
}
);

document.getElementById('formBtnCancel').addEventListener('click', (e) => {
    e.preventDefault();
    try{
    document.getElementById('formDiv').style.display = 'none';}
    catch(error){
        console.log(error.message);
    }
    });
