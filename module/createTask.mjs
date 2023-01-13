export function createTask() {
  const body = document.createElement("body");
  body.id = "bodyCreateTask";

  const header = document.createElement("header");
  header.className = "Header";
  header.id = "createTask";
  header.textContent = "Create a Student Tasks";
  body.appendChild(header);

  const main = document.createElement("div");
  main.className = "main";
  //   main.id = "main";

  const formDiv = document.createElement("div");
  formDiv.className = "form";

  const form = document.createElement("form");
  form.action = "";

  let label1 = document.createElement("label");
  label1.htmlFor = "taskSubject";
  label1.textContent = "Add Task Subject:";
  form.appendChild(label1);

  let br1 = document.createElement("br");
  form.appendChild(br1);

  let input1 = document.createElement("input");
  input1.type = "text";
  input1.id = "taskSubject";
  input1.placeholder = "Task Subject";
  input1.minlength = "5";
  form.appendChild(input1);

  let br2 = document.createElement("br");
  form.appendChild(br2);

  let label2 = document.createElement("label");
  label2.htmlFor = "taskText";
  label2.textContent = "Add Task Text:";
  form.appendChild(label2);

  let br3 = document.createElement("br");
  form.appendChild(br3);

  let textarea = document.createElement("textarea");
  textarea.name = "taskText";
  textarea.id = "taskText";
  textarea.placeholder = "Task Text";
  form.appendChild(textarea);

  let br4 = document.createElement("br");
  form.appendChild(br4);

  let label3 = document.createElement("label");
  label3.htmlFor = "taskDate";
  label3.textContent = "Add Deadline for submission:";
  form.appendChild(label3);

  let br5 = document.createElement("br");
  form.appendChild(br5);

  let input2 = document.createElement("input");
  input2.type = "date";
  input2.id = "taskDate";
  input2.placeholder = "Deadline for submission";
  form.appendChild(input2);

  let br6 = document.createElement("br");
  form.appendChild(br6);

  let br7 = document.createElement("br");
  form.appendChild(br7);

  let div1 = document.createElement("div");
  form.appendChild(div1);

  let button1 = document.createElement("button");
  button1.type = "submit";
  button1.className = "Btn_OK";
  button1.id = "Btn_OK";
  button1.textContent = "Create a New Task";
  div1.appendChild(button1);

  formDiv.appendChild(form);
  main.appendChild(formDiv);

  let div2 = document.createElement("div");
  formDiv.appendChild(div2);

  let a = document.createElement("a");
  a.href = "/";
  div2.appendChild(a);

  let button2 = document.createElement("button");
  button2.className = "Btn_OK";
  button2.id = "returnButton";
  button2.textContent = "Back to Tasks";
  a.appendChild(button2);

  body.appendChild(main);

  // let footer = document.createElement("footer");
  // footer.className = "footer";
  // footer.textContent = "@ Powered by Andrey V. 2022";
  // body.appendChild(footer);

  document.body = body;
}
