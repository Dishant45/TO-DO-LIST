import { formSubmission } from "./helper/formsubmission.js";
import { createTaskMarkup } from "./helper/createmarkup.js";
export let data = [];
// document.forms.tasklist.addEventListener("submit", () => {
//   formSubmission();
// });

// Remove existing UI/Markup
// Create new Markup
export const updateUI = () => {
  const list = document.getElementById("list");
  list.querySelectorAll("*").forEach((child) => child.remove());
  if (data.length) {
    data.forEach((todoObject) => {
      list.appendChild(createTaskMarkup(todoObject));
    });
  }
};

// Set data to localstorage
export const updateLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(data));
};
window.formSubmission = formSubmission;
window.onload = () => {
  data = JSON.parse(localStorage.getItem("data"));
  if (!data) {
    data = [];
  }
  updateUI();
};

// TODO
// When you delete todo, remove from array, update localstorage, updateUI
