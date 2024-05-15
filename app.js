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

//delegation form
//delete todos

// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// });

// ul.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.remove();
//   }
// });

const ul = document.querySelector(".list-group");
//Adding function
const textGenerate = (todo) => {
  ul.innerHTML += ` <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
};

const addForm = document.querySelector(".add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (addForm.add.value == "") {
    alert("Please Write Something");
  } else {
    textGenerate(todo);
  }
  addForm.add.value = "";
});

//delete Function
//delegation Form
ul.addEventListener("click", (value) => {
  if (value.target.classList.contains("delete")) {
    value.target.parentElement.remove();
  }
});

//Search Function
const search = document.querySelector(".search input");

const filterTodos = (term) => {
  Array.from(ul.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(ul.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
