/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./buttons.js":
/*!********************!*\
  !*** ./buttons.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions.js\");\n\n/* document.getElementById('formBtnCancel').addEventListener('click', hideForm); */\n\n\n\n\n\n//# sourceURL=webpack://todo/./buttons.js?");

/***/ }),

/***/ "./classes.js":
/*!********************!*\
  !*** ./classes.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions.js */ \"./functions.js\");\n//creating todo model\n\nclass Todo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.completed = false;\n    }\n    changePriority(newPriority) {\n        this.priority = newPriority;\n    }\n    completeTodo() {\n        this.completed = true;\n      }\n      uncompleteTodo() {\n        this.completed = false;\n      }\n}\nclass Project {\n    static projects = [];\n    constructor(name, id) {\n        this.id=id;\n        this.name = name;\n        this.todos = [];\n        Project.projects.push(this);\n    }\n    addTodo(todo) {\n        this.todos.push(todo);\n    }\n    static getProjects() {\n        const projects=JSON.parse(localStorage.getItem('projects'));\n        if(projects){\n            Project.projects=projects;\n        }\n        Project.projects.forEach(project => {\n            (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.displayProject)(project);\n    });\n}\n}\n\n\nconst task1= new Todo('42', 'The meaning of 42', '2021-01-01', 'low');\nconst task2= new Todo('Read the article', 'Take notes and highlight', '2021-01-01', 'high');\nconst task3= new Todo('Finish the project', 'Finish the project', '2021-01-01', 'high');\nconst project1 = new Project('Study', '0');\nconst project2 = new Project('Hobby', '1');\nconst project3 = new Project('Work', '2');\nproject1.addTodo(task1);\nproject1.addTodo(task2);\nproject2.addTodo(task2);\nproject3.addTodo(task3);\nproject3.addTodo(task1);\nproject3.addTodo(task2);\n\nconsole.log(Project.projects);\n/* Project.getProjects(); */\n\n\n\n//# sourceURL=webpack://todo/./classes.js?");

/***/ }),

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayContent\": () => (/* binding */ displayContent),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject),\n/* harmony export */   \"homeTab\": () => (/* binding */ homeTab),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"taskNumbers\": () => (/* binding */ taskNumbers),\n/* harmony export */   \"updateContent\": () => (/* binding */ updateContent)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ \"./classes.js\");\n\n\nlet homeClick = false;\nlet lastProject = false;\nfunction showForm(){\n    document.getElementById('formDiv').style.display = 'flex';\n        }\n\nfunction displayContent(project){\n    let projectId;\n  if(homeClick!=true){\n    console.log(\"Homeclick is false\");\n  projectId = project.value;}\n   else{projectId = project;\n    console.log(\"Homeclick is true\");}\n\n   const tasksHTML = _classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects[projectId].todos.map(todo => `<div class=\"task\">\n   <div class=\"task_title\">${todo.title}</div>\n   <div class=\"task_date\">${todo.dueDate}</div>\n   </div>`).join('');\n   console.log(_classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects[projectId].todos.length);\n   const taskAddHtml = document.createElement('div');\n   taskAddHtml.classList.add('taskAdd');\n\n    const taskAddBtn = document.createElement('button');\n    taskAddBtn.textContent = 'New Task';\n    taskAddBtn.setAttribute('id', 'taskAddBtn');\n    taskAddBtn.classList.add('taskAddBtn');\n    taskAddBtn.setAttribute('value', projectId);\n    taskAddBtn.addEventListener('click', showForm);\n    taskAddHtml.appendChild(taskAddBtn);\n    if(homeClick!=true){\n   document.querySelector('#task-container').innerHTML = tasksHTML;\n   document.querySelector('#task-container').appendChild(taskAddHtml);}\n   else{\n    document.querySelector('#task-container').innerHTML += tasksHTML;\n   }\n   if(lastProject){ document.querySelector('#task-container').appendChild(taskAddHtml); lastProject = false;}\n  homeClick = false;\n}\n/*When adding new task update the project task page */\n    function updateContent (project){\n    const projectId = document.getElementById(project).value;\n    const tasksHTML = _classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects[projectId].todos.map(todo => `<div class=\"task\">\n    <div class=\"task_title\">${todo.title}</div>\n    <div class=\"task_date\">${todo.dueDate}</div>\n    </div>`).join('');\n /*    const taskAddBtn = `<div class=\"taskAdd\"><button onclick=\"showForm()\" class=\"taskAddBtn\" id=\"taskAddBtn\" value=\"${projectId}\">New Task</button></div>`;\n    \n */\n const taskAddHtml = document.createElement('div');\n taskAddHtml.classList.add('taskAdd');\n\n  const taskAddBtn = document.createElement('button');\n  taskAddBtn.textContent = 'New Task';\n  taskAddBtn.setAttribute('id', 'taskAddBtn');\n  taskAddBtn.classList.add('taskAddBtn');\n  taskAddBtn.setAttribute('value', projectId);\n  taskAddBtn.addEventListener('click', showForm);\n  taskAddHtml.appendChild(taskAddBtn);\n\n document.querySelector('#task-container').innerHTML = tasksHTML;\n  document.querySelector('#task-container').appendChild(taskAddHtml);\nconsole.log(_classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects);\n    /* document.querySelector('#task-container').innerHTML+= taskAddBtn; */\n    }\n\n\n\n\n\nlet i=0;\nfunction displayProject(project){\n    const projectHTML = `<li class=\"project\" id=\"${project.name}\" value=\"${i}\">${project.name}<div class=\"taskNumbers\" id=\"taskNumbers\"><div class=\"completed\" id=\"completed\">0/</div><div class=\"totalTasks\" id=\"totalTasks\">${project.todos.length}</div></div></li>`;\n    i++;\n  \n    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);\n\n }\nfunction newProject(project){\n    const projectHTML = `<li class=\"project\" id=\"${project.name}\" value=\"${project.id}\">${project.name}<div class=\"taskNumbers\" id=\"taskNumbers\"><div class=\"completed\" id=\"completed\">0/</div><div class=\"totalTasks\" id=\"totalTasks\">${project.todos.length}</div></div></li>`;\n    document.querySelector('#projects-list').insertAdjacentHTML('beforeend', projectHTML);\n    document.getElementById('section-title').textContent = project.name;\n    document.querySelector('#task-container').innerHTML = '';\n    const taskAddHtml = ` <div class=\"taskAdd\"><button onclick=\"showForm()\" class=\"taskAddBtn\" id=\"taskAddBtn\" value=\"${project.id}\">New Task</button></div>`;\n    document.querySelector('#task-container').innerHTML = taskAddHtml;\n    \n}\n\n \nfunction homeTab(){\n    document.querySelector('#task-container').innerHTML = '';\n    console.log(\"Home Tab\");\nfor (let j=0; j < _classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects.length; j++){\n    console.log(_classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects[j]);\n    homeClick = true;\n    if(_classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects.length-1 == j){\n        lastProject = true;\n    }\ndisplayContent(_classes__WEBPACK_IMPORTED_MODULE_0__.Project.projects[j].id);\n\n}\n}\n\nfunction taskNumbers(project){\n\ndocument.getElementById(`${project.name}`).childNodes[1].childNodes[1].textContent = `${project.todos.length}`;\n}\n\n\n\n\n//# sourceURL=webpack://todo/./functions.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    padding: 0;\\n}\\n.content{\\n    height: 100vh;\\n    display: grid;\\n    grid-template-columns: 200px 2fr;\\n    grid-template-rows: 100px 1fr;\\n    background-color: bisque;\\n}\\n\\n/*Sidepanel CSS*/\\nnav{\\n    background-color: rgb(197, 197, 197);\\n   grid-row: 2/3;\\n   grid-column: 1/2;\\n \\n}\\n#sidebar-container{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    margin: 50px auto;\\n    width: 180px;\\n    padding-left: 20px;\\n   font-size: 1.5rem;\\n   \\n}\\nnav li{\\n   \\n    margin: 10px 10px 10px;\\n    list-style: none;\\n}\\n.nav-item:hover{\\n    color: rgb(255, 255, 255);\\n    background-color: rgb(255, 0, 0);\\n    cursor: pointer;\\n}\\n.project{\\n    display: flex;\\n    justify-content: space-between;\\n}\\n.project:hover{\\n    color: rgb(255, 255, 255);\\n    background-color: rgb(255, 0, 0);\\n    cursor: pointer;\\n}\\n.taskNumbers{\\n    font-size: 18px;\\n    display: flex;\\n    align-items: flex-end;\\n}\\n/*New Project Form*/\\n\\n.newProjectForm{\\n    display: flex;\\n    align-items: flex-end;\\n}\\n.newProjectForm input{\\n   height: 24px;\\n}\\n.projectFrmBtns button{\\nheight: 28px;\\n}\\n\\n/* End of New Project Form*/\\n\\n/*END of Sidepanel CSS*/\\n\\n/*topbar css*/\\nheader{\\n    background-color: rgb(245, 186, 186);\\n   grid-column: 1/3;\\n   display: flex;\\n   justify-content: space-between;\\n   align-items: center;\\n}\\nheader div{\\n    margin: 0 20px;\\n}\\nheader div button{\\n    margin: auto 20px;\\n}\\n\\n.topbar-user{\\n    display: flex;\\n    align-items:flex-end;\\n}\\n/*end of TOPBAR css*/\\n\\n\\n\\n/*main content css*/\\n#section-title{\\n    text-transform: capitalize;\\n}\\n.taskAddBtn{\\n    font-size: 1.95rem;\\n    color: black;\\n    padding: 0px 20px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n\\n}\\n\\n/*end of main content css*/\\n/*form style*/\\n.formDiv{\\n   display: none;\\n   align-items: center;\\n   justify-content: center;\\n   position:fixed;\\n   z-index: 2;\\n   top: 0;\\n   height: 100vh;\\n   width: 100vw;\\n   backdrop-filter: blur(5px);\\n}\\n#task-form{\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 400px;\\n    height: 300px;\\n    background-color: rgb(255, 255, 255);\\n    border-radius: 5px;\\n    padding: 20px;\\n    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);\\n}\\n.taskContent{\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    justify-content: space-between;\\n}\\n.taskContent textarea{\\n    resize: none;\\n    border: none;\\n}\\n.taskContent .taskName{\\n    font-size: 1.5rem;\\n    font-weight: 900;\\n}\\n.taskContent .taskDescription{\\n    height: 5rem;\\n    margin-bottom: 2rem;\\n}\\n.taskContent input{\\n    width: fit-content;\\n}\\n.taskContent select{\\n    width: 70px;\\n}\\n#task-form div button{\\n    margin: 0 10px;\\n    font-size: 2rem;\\n    border: 2px solid red;\\n    color: black;\\n    padding: 10px 20px;\\n    border-radius: 5px;\\n    cursor: pointer;\\n}\\n.formBtnAdd{\\n  \\n\\n   \\n\\n  \\n    content: \\\"O\\\";\\n    \\n}\\n.formBtnCancel{\\n\\n    content: \\\"X\\\";\\n}\\n\\n.task{\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin: 10px 0;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;\\n}\\n/*end of form style*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes */ \"./classes.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions */ \"./functions.js\");\nconsole.log(\"Working!\");\n\n\n\n\n\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//\nconst home = document.getElementById('home');\nconst today = document.getElementById('today');\nconst upcoming = document.getElementById('upcoming');\nconst projects = document.querySelectorAll('.project');\nconst sectionTitle = document.getElementById('section-title');\n\n\n\nhome.addEventListener('click', () => {\n    console.log('home');\n    sectionTitle.textContent = 'Home';\n    (0,_functions__WEBPACK_IMPORTED_MODULE_3__.homeTab)();    \n});\ntoday.addEventListener('click', () => {\n    console.log('today');\n    sectionTitle.textContent = _classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects[0].name;\n    document.querySelector('#task-container').innerHTML ='';\n});\nupcoming.addEventListener('click', () => {\n    console.log('upcoming');\n    sectionTitle.textContent = 'Upcoming';\n    document.querySelector('#task-container').innerHTML ='';    \n});\n\n//******************PROJECT ADDEDVENTLISTENERS********************\ndocument.getElementById('projects-list').addEventListener('click', (event) => {\n  if (event.target.classList.contains('project')) {\n    console.log(event.target.id);\n    sectionTitle.textContent = event.target.id;\n    (0,_functions__WEBPACK_IMPORTED_MODULE_3__.displayContent)(event.target);\n  }\n});\n                //******************FORM ADDEDVENTLISTENERS********************\n//Cancel Button\ndocument.getElementById('formBtnCancel').addEventListener('click', (e) => {\n    e.preventDefault();\n    try{\n    document.getElementById('formDiv').style.display = 'none';}\n    catch(error){\n        console.log(error.message);\n    }\n    });\n\n        //New Task Add Form --\n        //takes the inputs and creates a new task object and adds it to the project's todo array\n        //and update the content\n                  document.querySelector('.formBtnAdd').addEventListener('click', (event)=>{\n                        event.preventDefault();\n                    \n                        const taskTitle = document.getElementById('taskName').value;\n                        const taskDescription = document.getElementById('taskDescription').value;\n                        const taskDueDate = document.getElementById('taskDueDate').value;\n                        const taskPriority = document.getElementById('taskPriority').value;\n                        const addTask = document.getElementById('taskAddBtn');\n                        const projectName = document.getElementById('section-title').textContent;\n                        \n                        const task = new _classes__WEBPACK_IMPORTED_MODULE_2__.Todo(taskTitle, taskDescription, taskDueDate, taskPriority);\n                                        //resetting the form\n                                        document.getElementById(\"taskName\").value = \"\";\n                                        document.getElementById(\"taskDueDate\").value = \"\";\n                                        document.getElementById(\"taskDescription\").value = \"\";\n                                       \n\n                        _classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects[addTask.value].todos.push(task);\n                        localStorage.setItem('projects', JSON.stringify(_classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects));\n                        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.updateContent)(projectName);\n                      \n                        document.getElementById('formDiv').style.display = 'none';\n                        (0,_functions__WEBPACK_IMPORTED_MODULE_3__.taskNumbers)(_classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects[addTask.value]);\n\n                 });\n        \n\n//New Project Add Form --\ndocument.getElementById('projectSubmit').addEventListener('click', (event)=>{\n    event.preventDefault();\n    const projectName = document.getElementById('projectName').value;\n    const project = new _classes__WEBPACK_IMPORTED_MODULE_2__.Project(projectName, `${_classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects.length}`);\n    localStorage.setItem('projects', JSON.stringify(_classes__WEBPACK_IMPORTED_MODULE_2__.Project.projects));\n    (0,_functions__WEBPACK_IMPORTED_MODULE_3__.newProject)(project);\n   \n  \n});\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./classes.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons */ \"./buttons.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions */ \"./functions.js\");\n\n\n\nlet i=0;\nfunction pageLoad(){\nconst body = document.querySelector('body');\nconst content = document.createElement('div');\ncontent.classList.add('content');\n//create header\nconst header = document.createElement('header');\nconst headerDiv = document.createElement('div');\nconst logo = document.createElement('div');\nconst userInfo = document.createElement('div');\nconst welcomeText = document.createElement('p');\nconst signoutBtn = document.createElement('button');\nconst h1 = document.createElement('h1');\n\nuserInfo.append(welcomeText, signoutBtn);\nlogo.appendChild(h1);\nheader.append(logo, userInfo);\n\n\nh1.textContent = 'wuToDo';\nwelcomeText.textContent = 'Welcome, User';\nsignoutBtn.textContent = 'Sign Out';\nheaderDiv.setAttribute('id', 'topbar');\nheaderDiv.classList.add('topbar-class');\nlogo.setAttribute('id', 'topbar-logo');\nuserInfo.classList.add('topbar-user');\nwelcomeText.setAttribute('id', 'topbar-welcome');\nsignoutBtn.setAttribute('id', 'topbar-btn');\n\n\n\n//create sidebar\nconst sidebar = document.createElement('nav');\nconst sidebarContent = document.createElement('div');\nconst navlist = document.createElement('ul');\nconst home = document.createElement('li');\nconst today = document.createElement('li');\nconst upcoming = document.createElement('li');\nconst projects = document.createElement('li');\nconst projectsSectionTitle = document.createElement('div');\nconst projectsList = document.createElement('ul');\n\n\nprojects.append(projectsSectionTitle, projectsList);\nnavlist.append(home, today, upcoming, projects);\n\n\nprojectsList.setAttribute('id', 'projects-list');\nsidebar.setAttribute('id', 'sidebar');\nsidebarContent.setAttribute('id', 'sidebar-container');\nnavlist.setAttribute('id', 'sidebar-navlist');\nhome.setAttribute('id', 'home');\ntoday.setAttribute('id', 'today');\nupcoming.setAttribute('id', 'upcoming');\nhome.classList.add('nav-item');\ntoday.classList.add('nav-item');\nupcoming.classList.add('nav-item');\n\n\nhome.textContent = 'Home';\ntoday.textContent = 'Today';\nupcoming.textContent = 'Upcoming';\nprojectsSectionTitle.textContent = 'Projects';\n//Sidebar New Project Form\nconst newProjectFormDiv = document.createElement('div');\nconst newProjectForm = document.createElement('form');\nconst projectName = document.createElement('input');\nconst projectFrmBtns = document.createElement('div');\nconst projectSubmit = document.createElement('button');\nprojectSubmit.textContent = 'Add';\nprojectName.setAttribute('placeholder', 'New Project Name');\nprojectSubmit.setAttribute('id', 'projectSubmit');\nnewProjectFormDiv.classList.add('newProjectFormDiv');\nnewProjectForm.classList.add('newProjectForm');\nnewProjectForm.setAttribute('id', 'newProjectForm');\nprojectName.setAttribute('id', 'projectName');\nprojectFrmBtns.classList.add('projectFrmBtns');\n\nprojectFrmBtns.appendChild(projectSubmit);\nnewProjectForm.append(projectName,projectFrmBtns);\nnewProjectFormDiv.appendChild(newProjectForm);\nsidebarContent.append(navlist, newProjectFormDiv);\nsidebar.appendChild(sidebarContent);\n\n\n\n\n\n\n\n//create main mainSection > contentContainer > section title > taskContainer >\nconst mainSection = document.createElement('div');\nconst contentContainer = document.createElement('div');\nconst taskContainer = document.createElement('div');\nconst sectionTitle= document.createElement('h2');\nsectionTitle.textContent = 'Home';\nsectionTitle.setAttribute('id', 'section-title');\nmainSection.setAttribute('id', 'mainSection');\ncontentContainer.setAttribute('id', 'content-container');\ntaskContainer.setAttribute('id', 'task-container');\n\ncontentContainer.append(sectionTitle, taskContainer);\nmainSection.appendChild(contentContainer);\n\n\n//******* FORM ADDING NEW TASK********\nconst formDiv = document.createElement('div');\nconst form = document.createElement('form');\n/* form.setAttribute('onsubmit', 'handleTaskSubmit(event)') */\nconst formInputs = document.createElement('div');\nconst formButtons = document.createElement('div');\nconst taskName = document.createElement('textarea');\ntaskName.classList.add('taskName');\ntaskName.setAttribute('id', 'taskName');\nconst taskDescription = document.createElement('textarea');\ntaskDescription.classList.add('taskDescription');\ntaskDescription.setAttribute('id', 'taskDescription');\nconst taskDueDate = document.createElement('input');\ntaskDueDate.setAttribute('type', 'date');\nconst taskPriority = document.createElement('select');\n/* const taskProject = document.createElement('select');\ntaskProject.setAttribute('id', 'taskProject'); */\nconst taskSubmit = document.createElement('button');\nconst taskCancel = document.createElement('button');\nconst taskP1 = document.createElement('option');\nconst taskP2 = document.createElement('option');\nconst taskP3 = document.createElement('option');\n\ntaskSubmit.classList.add('formBtnAdd');\ntaskSubmit.setAttribute('id', 'formBtnAdd');\ntaskSubmit.setAttribute('type', 'button');\ntaskCancel.setAttribute('id', 'formBtnCancel');\n\ntaskCancel.classList.add('formBtnCancel');\ntaskDueDate.setAttribute('id', 'taskDueDate');\ntaskPriority.setAttribute('id', 'taskPriority');\nformDiv.classList.add('formDiv');\nform.setAttribute('id', 'task-form');\nformDiv.setAttribute('id', 'formDiv');\nformInputs.classList.add('taskContent');\ntaskSubmit.textContent = 'O';\ntaskCancel.textContent = 'X';\ntaskP1.textContent = 'Low';\ntaskP2.textContent = 'Medium';\ntaskP3.textContent = 'High';\ntaskName.placeholder = 'What do you need to do?';\ntaskDescription.placeholder = 'Description';\n\ntaskPriority.append(taskP1, taskP2, taskP3);\nformInputs.append(taskName, taskDescription, taskDueDate, taskPriority/* , taskProject */);\nformButtons.append(taskSubmit, taskCancel);\nform.append(formInputs, formButtons);\nformDiv.appendChild(form);\n\n\n\n\n\ncontent.append(header, sidebar, mainSection);\nbody.append(content, formDiv);\n_classes__WEBPACK_IMPORTED_MODULE_0__.Project.getProjects();\n/* Project.projects.forEach(project => {\n    const projectTitle = document.createElement('li');\n    projectTitle.textContent = project.name;\n    projectTitle.classList.add('project');\n    projectTitle.setAttribute('id', project.name);\n    projectsList.appendChild(projectTitle);\n    sectionTitle.textContent = project.name;\n   projectTitle.setAttribute('value', i);\n   i++;\n}); */\n}\n\n//# sourceURL=webpack://todo/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;