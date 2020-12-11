import { updateUI, updateLocalStorage, data } from "../main.js";
import { CreateTODO } from "./listconstructor.js";
// On todo input, Create Todo object
// Add Todo object to data[]
// update localstorage

export const formSubmission = (event) => {
  event.preventDefault();
  let todoContent = document.forms.tasklist.task.value;
  if (todoContent.length) {
    let todo = new CreateTODO(todoContent);
    data.push(todo);
    updateLocalStorage();
    updateUI();
  } else {
    alert("Pass Some Data");
  }
  document.forms.tasklist.task.value = "";
};
