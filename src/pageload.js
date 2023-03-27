import { Project } from "../classes";
import { homeTab } from "../content";
import { format} from "date-fns";


const date = new Date();
const dateText = format(new Date(), "'Today is a' eeee");
const dateNum = format(date, "dd/MM");

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
const dateNumText = document.createElement('p');
const h1 = document.createElement('h1');

userInfo.append(welcomeText, dateNumText);
logo.appendChild(h1);
header.append(logo, userInfo);


h1.textContent = 'wuToDo';
welcomeText.textContent = `Welcome, ${dateText}`;
dateNumText.textContent = dateNum;
headerDiv.setAttribute('id', 'topbar');
headerDiv.classList.add('topbar-class');
logo.setAttribute('id', 'topbar-logo');
userInfo.classList.add('topbar-user');
dateNumText.classList.add('topbar-date');
welcomeText.setAttribute('id', 'topbar-welcome');



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


projects.append(projectsSectionTitle, projectsList);
navlist.append(home, today, upcoming, projects);

projectsSectionTitle.setAttribute('id', 'projectSectionTitle');
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
//Sidebar New Project Form
const newProjectFormDiv = document.createElement('div');
const newProjectForm = document.createElement('form');
const projectName = document.createElement('input');
const projectFrmBtns = document.createElement('div');
const projectSubmit = document.createElement('button');
projectSubmit.textContent = 'Add';
projectName.setAttribute('placeholder', 'Project Title');
projectSubmit.setAttribute('id', 'projectSubmit');
newProjectFormDiv.classList.add('newProjectFormDiv');
newProjectFormDiv.classList.add('center');
newProjectForm.classList.add('newProjectForm');
newProjectForm.setAttribute('id', 'newProjectForm');
projectName.setAttribute('id', 'projectName');
projectFrmBtns.classList.add('projectFrmBtns');

projectFrmBtns.appendChild(projectSubmit);
newProjectForm.append(projectName,projectFrmBtns);
newProjectFormDiv.appendChild(newProjectForm);
sidebarContent.append(navlist, newProjectFormDiv);
sidebar.appendChild(sidebarContent);







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


//******* FORM ADDING NEW TASK********
const formDiv = document.createElement('div');
const form = document.createElement('form');
const formInputs = document.createElement('div');
const formButtons = document.createElement('div');
const formSelects = document.createElement('div');
const taskName = document.createElement('textarea');
taskName.classList.add('taskName');
taskName.setAttribute('id', 'taskName');
const taskDescription = document.createElement('textarea');
taskDescription.classList.add('taskDescription');
taskDescription.setAttribute('id', 'taskDescription');
const taskDueDate = document.createElement('input');
taskDueDate.setAttribute('type', 'date');
const taskPriority = document.createElement('select');

const taskSubmit = document.createElement('button');
const taskCancel = document.createElement('button');
const taskP1 = document.createElement('option');
const taskP2 = document.createElement('option');
const taskP3 = document.createElement('option');

taskSubmit.classList.add('formBtnAdd');
taskSubmit.setAttribute('id', 'formBtnAdd');
taskSubmit.setAttribute('type', 'button');
taskCancel.setAttribute('id', 'formBtnCancel');


taskCancel.classList.add('formBtnCancel');
taskDueDate.setAttribute('id', 'taskDueDate');
taskPriority.setAttribute('id', 'taskPriority');
formDiv.classList.add('formDiv');
form.setAttribute('id', 'task-form');
formDiv.setAttribute('id', 'formDiv');
formInputs.classList.add('taskContent');
formSelects.setAttribute('id', 'formInputs');
taskSubmit.textContent = 'O';
taskCancel.textContent = 'X';
taskP1.textContent = 'Low';
taskP2.textContent = 'Medium';
taskP3.textContent = 'High';
taskName.placeholder = 'Task Name';
taskDescription.placeholder = 'Description';

taskPriority.append(taskP1, taskP2, taskP3);
formSelects.append(taskDueDate, taskPriority);
formInputs.append(taskName, taskDescription, formSelects);
formButtons.append(taskSubmit, taskCancel);
form.append(formInputs, formButtons);
formDiv.appendChild(form);




content.append(header, sidebar, mainSection);
body.append(content, formDiv);
Project.getProjects();
homeTab();

}