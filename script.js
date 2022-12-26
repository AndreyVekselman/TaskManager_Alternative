import { header } from "./module/header.mjs";
import { main } from "./module/main.mjs";
import { footer } from "./module/footer.mjs";
import { freshMainScreen } from "./module/freshMainScreen.mjs";
import { createTask } from "./module/createTask.mjs";
import { createNewTask } from "./module/createNewTask.mjs";
import { removeItems } from "./module/removeItems.mjs";
import { taskSolutionPage } from "./module/taskSolutionPage.mjs";

let templates = {
  home: function () {
    header();
    main();
    footer();
    freshMainScreen();
    console.log("Hello world");
  },
  solutionPage: function () {
    removeItems();
    header();
    main();
    footer();
    taskSolutionPage();
    //   showOnTaskSolution();
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
    createTask();
    createNewTask();
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
