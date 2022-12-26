export function showTaskDetails(task) {
  let text = "";
  const subjText = document.getElementById("subjTxt");
  text = "Task  Subject: " + task.taskSubject;
  const txtNode = document.createTextNode(text);
  // subjText.appendChild(txtNode);

  const txtDiv = document.getElementById("text");
  const txtArea = document.createElement("textarea");
  txtArea.setAttribute("id", "txtArea");
  txtArea.disabled = true;
  txtArea.value = task.taskText;
  txtDiv.appendChild(txtArea);
  const taskSolution = document.getElementById("taskSolution");
  taskSolution.value = task.taskTextSolution;
  // on taskCheckDelete
  if (task.flagCheck) {
    const taskNotes = document.getElementById("taskNotes");
    taskNotes.value = task.taskTeacherNotes;
    const taskGrade = document.getElementById("gradeScore");
    taskGrade.value = task.taskGrade;
    const delButtonDiv = document.getElementById("delButton");
    const linkToIndex = document.createElement("a");
    linkToIndex.setAttribute("href", "/index.html");

    const delButton = document.createElement("button");
    delButton.innerText = "DELETE TASK";
    delButton.setAttribute("id", "deleteButton");
    linkToIndex.appendChild(delButton);
    delButtonDiv.appendChild(linkToIndex);
  }
  if (task.flagSolution) {
    const taskNotes = document.getElementById("taskNotes");
    taskNotes.value = task.taskTeacherNotes;
  }
}
