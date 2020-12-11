import { deleteMarkup } from "./deletemarkup.js";
export const createTaskMarkup = (todoObject) => {
  const div = document.createElement("div");
  div.id = todoObject.id;
  div.classList.add("divlist");
  const h2 = document.createElement("h2");
  h2.innerHTML = todoObject.content;
  div.appendChild(h2);
  h2.classList.add("divh2");
  const button = document.createElement("button");
  button.innerHTML = "DeleteTask";
  button.classList.add("divbutton");

  button.addEventListener("click", () => {
    deleteMarkup(todoObject.id);
  });
  h2.appendChild(button);

  //div.innerHTML=taskObject.description;
  return div;
};
