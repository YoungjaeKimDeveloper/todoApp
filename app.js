// const addForm = document.querySelector(".add");
// const ul = document.querySelector(".list-group");
// const generateTemplate = (todo) => {
//   const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
//   <span>${todo}</span>
//   <i class="far fa-trash-alt delete"></i>
// </li>`;
//   ul.innerHTML += html;
// };

// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todo = addForm.add.value.trim();
//   generateTemplate(todo);
//   addForm.add.value = "";
// });
// const searchBar = document.querySelector(".search");

// searchBar.addEventListener("input", () => {

//   console.log(searchBar.search.value);
// });

//adding Function
// const ul = document.querySelector(".todos");
// const createHtml = (todo) => {
//   ul.innerHTML += ` <li
//     class="list-group-item d-flex justify-content-between align-items-center"
//   >
//     <span>${todo}</span>
//     <i class="far fa-trash-alt delete"></i>
//   </li>`;
// };

// const addForm = document.querySelector(".add");
// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const todo = addForm.add.value.trim();
//   if (todo.length == 0 || todo == "") {
//     alert("Please write Something");
//   } else {
//     createHtml(todo);
//   }

//   addForm.add.value = "";
// });

//Add
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplate = (todo) => {
  list.innerHTML += `<li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.add.value == "") {
    alert("Please write down Something");
  } else {
    generateTemplate(e.target.add.value);
    e.target.add.value = "";
  }
});
//Delete
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//Search Function
// const search = document.querySelector(".search input");

// const filterTodos = (term) => {
//   Array.from(list.children)
//     .filter((todo) => !todo.textContent.includes(term))
//     .forEach((todo) => todo.classList.add("filtered"));

//   Array.from(list.children)
//     .filter((todo) => todo.textContent.includes(term))
//     .forEach((todo) => todo.classList.remove("filtered"));
// };

// //keyup event
// search.addEventListener("keyup", () => {
//   const term = search.value.trim().toLowerCase();
//   filterTodos(term);
// });

//Search Funciton

const filterTodo = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

const form = document.querySelector(".search");
form.addEventListener("input", (e) => {
  const searching = e.target.value;
  filterTodo(searching);
});
