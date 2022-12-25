let templates = {
  home: function () {
    //   header();
    //   main();
    //   footer();
    //   freshMainScreen();
    console.log("Hello world");
  },
  solutionPage: function () {
    //   removeItems();
    //   header();
    //   main();
    //   footer();
    //   taskSolutionPage();
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
};
let routes = {
  "/": "home",
  "/solutionPage": "solutionPage",
  "/about": "about",
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
window.addEventListener("load", function (e) {
  router();
});
window.addEventListener("hashchange", function (e) {
  router();
});

window.addEventListener("storage", function (e) {
  freshMainScreen();
});
// function checkURL() {
//   let url = window.location.hash.slice(1) || "/";
//   if ((url = "/")) {
//     // document.body.innerHTML = "";
//     let link = document.createElement("a");
//     link.href = "#/solutionPage";
//     link.innerHTML = "go to solution";
//     document.body.appendChild(link);
//   }
//   console.log(url);
// }

// window.addEventListener("hashchange", checkURL);
// window.addEventListener("load", checkURL);

/////
function average() {
  let count = 0;
  let number = 0;
  for (let i = 0; i < 10; i++) {
    number = Number(prompt(`Enter number: ${i + 1}`));
    console.log(number);
    count += number;
  }
  const average = count / 10;
  alert(`everage of numbers is: ${average}`);
}
// average();
function maxGrade() {
  const grades = [];

  for (let i = 1; i <= 3; i++) {
    let grade = prompt("Enter a grade:");
    grades.push(Number(grade));
  }
  let highestGrade = Math.max(...grades);
  console.log(highestGrade);
}

// maxGrade();

function printNumbers() {
  let count = Number(prompt("Enter Number: "));
  for (let i = count; i != 0; i--) {
    console.log(i);
  }
}
// printNumbers();

function skipSeven() {
  for (let i = 1; i <= 10; i++) {
    if (i != 7) {
      console.log(i);
    }
  }
}
// skipSeven();

function devideThree() {
  let count = 0;
  console.log(count);
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0) {
      count++;
    }
  }
  console.log(count);
}

// devideThree();
//
function guessNumber() {
  const target = Math.floor(Math.random() * 101);
  for (let i = 1; i <= 10; i++) {
    let guess = Number(prompt("Guess the number:"));
    if (guess == target) {
      alert("You guessed the right number!");
      i = 100;
    } else if (guess < target) {
      alert("The number you guessed is too low");
    } else {
      alert("The number you guessed is too high.");
    }
  }

  alert(`The target number was  + ${target}`);
}

// guessNumber();
