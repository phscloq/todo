import { Todo, Project } from "../classes";
import { hideForm } from "../buttons";
let i=0;
export default function pageLoad(){
const body = document.querySelector('body');
const content = document.createElement('div');
content.classList.add('content');
//create header
const header = document.createElement('header');
const headerDiv = document.createElement('div');
const logo = document.createElement('div');
const userInfo = document.createElement('div');
const welcomeText = document.createElement('p');
const signoutBtn = document.createElement('button');
const h1 = document.createElement('h1');

userInfo.append(welcomeText, signoutBtn);
logo.appendChild(h1);
header.append(logo, userInfo);


h1.textContent = 'wuToDo';
welcomeText.textContent = 'Welcome, User';
signoutBtn.textContent = 'Sign Out';
headerDiv.setAttribute('id', 'topbar');
headerDiv.classList.add('topbar-class');
logo.setAttribute('id', 'topbar-logo');
userInfo.classList.add('topbar-user');
welcomeText.setAttribute('id', 'topbar-welcome');
signoutBtn.setAttribute('id', 'topbar-btn');



//create sidebar
const sidebar = document.createElement('nav');
const sidebarContent = document.createElement('div');
const navlist = document.createElement('ul');
const home = document.createElement('li');
const today = document.createElement('li');
const upcoming = document.createElement('li');
const projects = document.createElement('li');
const projectsSectionTitle = document.createElement('div');
const projectsList = document.createElement('ul');
const study = document.createElement('li');
const work = document.createElement('li');

/* projectsList.append(study, work); */
projects.append(projectsSectionTitle, projectsList);
navlist.append(home, today, upcoming, projects);
sidebarContent.appendChild(navlist);
sidebar.appendChild(sidebarContent);
projectsList.setAttribute('id', 'projects-list');
sidebar.setAttribute('id', 'sidebar');
sidebarContent.setAttribute('id', 'sidebar-container');
navlist.setAttribute('id', 'sidebar-navlist');
home.setAttribute('id', 'home');
today.setAttribute('id', 'today');
upcoming.setAttribute('id', 'upcoming');
home.classList.add('nav-item');
today.classList.add('nav-item');
upcoming.classList.add('nav-item');


home.textContent = 'Home';
today.textContent = 'Today';
upcoming.textContent = 'Upcoming';
projectsSectionTitle.textContent = 'Projects';

//creating projects
study.setAttribute('id', 'study');
work.setAttribute('id', 'work');
study.classList.add('project');
work.classList.add('project');

study.textContent = 'Study';
work.textContent = 'Work';












//create main mainSection > contentContainer > section title > taskContainer >
const mainSection = document.createElement('div');
const contentContainer = document.createElement('div');
const taskContainer = document.createElement('div');
const sectionTitle= document.createElement('h2');
sectionTitle.textContent = 'Home';
sectionTitle.setAttribute('id', 'section-title');
mainSection.setAttribute('id', 'mainSection');
contentContainer.setAttribute('id', 'content-container');
taskContainer.setAttribute('id', 'task-container');

contentContainer.append(sectionTitle, taskContainer);
mainSection.appendChild(contentContainer);


//form for adding a new task
const formDiv = document.createElement('div');
const form = document.createElement('form');
const formInputs = document.createElement('div');
const formButtons = document.createElement('div');
const taskName = document.createElement('textarea');
taskName.classList.add('taskName');
const taskDescription = document.createElement('textarea');
taskDescription.classList.add('taskDescription');
const taskDueDate = document.createElement('input');
taskDueDate.setAttribute('type', 'date');
const taskPriority = document.createElement('select');
const taskProject = document.createElement('select');
const taskSubmit = document.createElement('button');
const taskCancel = document.createElement('button');
const taskP1 = document.createElement('option');
const taskP2 = document.createElement('option');
const taskP3 = document.createElement('option');
const taskProjectOption1 = document.createElement('option');
const taskProjectOption2 = document.createElement('option');
taskSubmit.classList.add('formBtnAdd');
taskSubmit.setAttribute('id', 'formBtnAdd');
taskCancel.setAttribute('id', 'formBtnCancel');

taskCancel.classList.add('formBtnCancel');
formDiv.classList.add('formDiv');
formDiv.setAttribute('id', 'formDiv');
formInputs.classList.add('taskContent');
taskSubmit.textContent = 'O';
taskCancel.textContent = 'X';
taskP1.textContent = 'Low';
taskP2.textContent = 'Medium';
taskP3.textContent = 'High';
taskName.placeholder = 'What do you need to do?';
taskDescription.placeholder = 'Description';

taskProjectOption1.textContent = 'Study';
taskProjectOption2.textContent = 'Work';

taskProject.append(taskProjectOption1, taskProjectOption2);
taskPriority.append(taskP1, taskP2, taskP3);
formInputs.append(taskName, taskDescription, taskDueDate, taskPriority, taskProject);
formButtons.append(taskSubmit, taskCancel);
form.append(formInputs, formButtons);
formDiv.appendChild(form);





content.append(header, sidebar, mainSection);
body.append(content, formDiv);
Project.getProjects();
/* Project.projects.forEach(project => {
    const projectTitle = document.createElement('li');
    projectTitle.textContent = project.name;
    projectTitle.classList.add('project');
    projectTitle.setAttribute('id', project.name);
    projectsList.appendChild(projectTitle);
    sectionTitle.textContent = project.name;
   projectTitle.setAttribute('value', i);
   i++;
}); */
}