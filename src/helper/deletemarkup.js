import { data, updateLocalStorage, updateUI } from "../main.js";
export const deleteMarkup = (id) => {
  let index = data.findIndex((task) => {
    return task.id == id;
  });
  data.splice(index, 1);

  updateLocalStorage();
  updateUI();

  //   window.localStorage.removeItem("data");
  //   updateLocalStorage();
};
