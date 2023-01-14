export function taskCheckDeletePage() {
  //
  const subMain = document.createElement("div");
  subMain.classList.add("subMain");

  // Create the first capsule element
  const capsule1 = document.createElement("div");
  capsule1.classList.add("capsule1");

  // Create the title element
  const title1 = document.createElement("div");
  title1.classList.add("title");

  // Create the subject text element
  const subjectText = document.createElement("p");
  subjectText.classList.add("p");
  subjectText.id = "subjTxt";

  // Create the details element
  const details1 = document.createElement("p");
  details1.id = "details";
  details1.textContent = "Task details:";

  // Append the subject text and details to the title element
  title1.appendChild(subjectText);
  title1.appendChild(details1);

  // Create the text element
  const text1 = document.createElement("div");
  text1.classList.add("text");
  text1.id = "text";

  // Create the button element
  const btn = document.createElement("div");
  btn.id = "linkindex1";
  btn.classList.add("btn");

  const button1 = document.createElement("button");
  button1.id = "linkToIndex1";
  button1.textContent = "Back to Tasks Page";

  // Create the link element
  const link1 = document.createElement("a");
  link1.id = "linkindex1";
  link1.href = "/";
  link1.appendChild(button1);
  btn.appendChild(link1);

  // Append the title, text, and link to the first capsule element
  capsule1.appendChild(title1);
  capsule1.appendChild(text1);
  capsule1.appendChild(btn);

  // Append the first capsule to the main element
  subMain.appendChild(capsule1);

  // Create the second capsule element
  const capsule2 = document.createElement("div");
  capsule2.classList.add("capsule2");

  // // Create the title element
  const title2 = document.createElement("div");
  title2.classList.add("title");
  // // Create the details element
  const details2 = document.createElement("p");
  //   details2.id = "details";
  details2.textContent = "Submition details:";

  // // Append the subject text and details to the
  // // Append the subject text and details to the title element
  // title2.appendChild(subjectText2);
  title2.appendChild(details2);

  // // Create the text element
  //   const text2 = document.createElement("div");
  //   text2.classList.add("text");

  // // Create the label and textarea elements for the solution
  const solutionLabel = document.createElement("label");
  solutionLabel.htmlFor = "taskSolution";
  solutionLabel.textContent = "Task solution:";
  const solutionTextarea = document.createElement("textarea");
  solutionTextarea.name = "solution";
  solutionTextarea.id = "taskSolution";
  solutionTextarea.placeholder = "Text solution";
  solutionTextarea.disabled = true;

  // // Create the label and textarea elements for the teacher notes
  const notesLabel = document.createElement("label");
  notesLabel.htmlFor = "taskNotes";
  notesLabel.textContent = "Teacher notes";
  const notesTextarea = document.createElement("textarea");
  notesTextarea.name = "taskNotes";
  notesTextarea.id = "taskNotes";
  notesTextarea.placeholder = "Your notes";

  // Create div grade
  const grade = document.createElement("div");
  grade.setAttribute("class", "grade");

  const gradeInputDiv = document.createElement("div");
  const gradeScoreLabel = document.createElement("label");
  gradeScoreLabel.htmlFor = "gradeScore";
  gradeScoreLabel.textContent = "Please enter a score:";
  const gradeInput = document.createElement("input");
  gradeInput.type = "number";
  gradeInput.nmae = "gradeScore";
  gradeInput.id = "gradeScore";
  gradeInputDiv.appendChild(gradeScoreLabel);
  gradeInputDiv.appendChild(gradeInput);
  grade.appendChild(gradeInputDiv);

  // // Create the button element
  const button2 = document.createElement("button");
  button2.id = "submitScore";
  button2.textContent = "Submit Score";

  // // Create the link element
  const link2 = document.createElement("a");
  link2.id = "linkToIndex";
  link2.appendChild(button2);
  //

  // // Create the no button element
  //   const noButton = document.createElement("p");
  //   noButton.id = "noButton";

  // // Append the label and textarea elements, link, and no button to the button element
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("btn");
  buttonContainer.id = "btnSubmit";
  buttonContainer.appendChild(link2);
  grade.appendChild(buttonContainer);
  //   buttonContainer.appendChild(noButton);

  // // Append the title, text, solution elements, notes elements, and button container to the second capsule element
  capsule2.appendChild(title2);
  //   capsule2.appendChild(text2);
  capsule2.appendChild(solutionLabel);
  capsule2.appendChild(document.createElement("br"));
  capsule2.appendChild(solutionTextarea);
  capsule2.appendChild(notesLabel);
  capsule2.appendChild(document.createElement("br"));
  capsule2.appendChild(notesTextarea);
  capsule2.appendChild(grade);
  // capsule2.appendChild(buttonContainer);

  // Append the second capsule to the main element
  subMain.appendChild(capsule2);
  //create a capsule3
  const capsule3 = document.createElement("div");
  capsule3.setAttribute("class", "capsule3");
  const delButton = document.createElement("div");
  delButton.classList.add("delButton");
  delButton.id = "delButton";

  capsule3.appendChild(delButton);
  subMain.appendChild(capsule3);
  main.appendChild(subMain);
  // // Append the main element to the body
  document.body.appendChild(main);
}
