export function createHeader(page) {
  document.body.innerHTML = "";
  let txtNode = "";

  const header = document.createElement("header");
  header.setAttribute("class", "Header");
  header.setAttribute("id", "refresh");
  document.body.appendChild(header);

  const headerSubject = document.createElement("div");
  const headerSubjectH2 = document.createElement("h2");
  switch (page) {
    case "home":
      txtNode = document.createTextNode("Student Tasks");
      break;
    case "solutionPage":
      txtNode = document.createTextNode("Student Tasks Solution");
      break;
    case "checkDeletePage":
      txtNode = document.createTextNode("Teacher Tasks Management");
      break;
    case "xxx":
      txtNode = document.createTextNode("Create a Student Tasks");
  }

  headerSubjectH2.appendChild(txtNode);
  headerSubject.appendChild(headerSubjectH2);
  header.appendChild(headerSubject);

  const headerLink = document.createElement("div");
  headerLink.setAttribute("id", "linkToCreatePage");
  const linkA = document.createElement("a");

  if (page === "home") {
    linkA.setAttribute("href", "#/createTask");
    const linkBtn = document.createElement("button");
    linkBtn.setAttribute("id", "addTaskBtn");
    txtNode = document.createTextNode("Add New Task");
    linkBtn.appendChild(txtNode);
    linkA.appendChild(linkBtn);
  }
  headerLink.appendChild(linkA);
  header.appendChild(headerLink);
}
