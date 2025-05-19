const addTodo = document.querySelector(".btn-add");
const todo = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  const todoText = todo.value.trim();
  if (todoText) {
    const paragraphEl = document.createElement("p");
    const spanEl = document.createElement("span");
    const btnRemoveEl = document.createElement("button");
    const toggleCompleteEl = document.createElement("input");

    paragraphEl.classList.add("todo-item");
    spanEl.classList.add("todo-text");
    btnRemoveEl.classList.add("btn-remove");
    toggleCompleteEl.classList.add("toggle-complete");

    spanEl.innerText = todoText;
    btnRemoveEl.innerText = "X";
    toggleCompleteEl.type = "checkbox";

    paragraphEl.appendChild(toggleCompleteEl);
    paragraphEl.appendChild(spanEl);
    paragraphEl.appendChild(btnRemoveEl);

    todoList.appendChild(paragraphEl);
  } else {
    alert("Please enter a todo");
  }
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remove")) {
    const parent = e.target.closest(".todo-item");
    console.log("parent");
    parent.remove();
  }
});
todoList.addEventListener("change", (e) => {
  if (e.target.classList.contains("toggle-complete")) {
    const parent = e.target.closest(".todo-item");
    parent.classList.toggle("completed");
  }
});
