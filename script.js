import { createHeader } from "./module/createHeader.mjs";
import { createMain } from "./module/createMain.mjs";
import { createFooter } from "./module/createFooter.mjs";
import { freshMainScreen } from "./module/freshMainScreen.mjs";
import { createTask } from "./module/createTask.mjs";
import { createNewTask } from "./module/createNewTask.mjs";
import { removeItems } from "./module/removeItems.mjs";
import { taskSolutionPage } from "./module/taskSolutionPage.mjs";
import { showOnTaskSolution } from "./module/showOnTaskSolution.mjs";

let templates = {
  home: function () {
    createHeader("home");
    createMain();
    createFooter();
    freshMainScreen();
    console.log("Hello world");
  },
  solutionPage: function () {
    removeItems();
    createHeader("solutionPage");
    createMain();
    taskSolutionPage();
    showOnTaskSolution();
    createFooter();
    console.log("solution Page active");
  },
  checkDeletePage: function () {
    //   header();
    //   main();
    //   footer();
    console.log("Delete Page active");
  },
  about: function () {
    console.log("bye");
  },
  createTask: function () {
    // createHeader("xxx");
    // createMain();
    createTask();
    createNewTask();
    createFooter();
  },
};
let routes = {
  "/": "home",
  "/taskSolutionPage": "solutionPage",
  "/about": "about",
  "/createTask": "createTask",
};

function resolveRoute(routeURL) {
  try {
    return routes[routeURL]; //routes['/about'] == 'about'
  } catch (e) {
    return false;
  }
}
function router() {
  let url = window.location.hash.slice(1) || "/";
  let route = resolveRoute(url);
  console.log(url);
  if (route) {
    templates[route]();
    console.log(route);
  } else {
    console.log("Route " + url + " not found");
  }
}
window.addEventListener("load", router);
window.addEventListener("hashchange", router);

window.addEventListener("storage", freshMainScreen);
/////
