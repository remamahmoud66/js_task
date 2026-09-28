let tasks = [
  { id: 1, text: "Check the rover battery", done: false },
  { id: 2, text: "Review the Mars landing map", done: true },
  { id: 3, text: "Brief Rania on the launch plan", done: false }
];

let nextId = 4;
let currentFilter = "all";

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("counter");
const emptyMsg = document.getElementById("empty-msg");
const clearDoneBtn = document.getElementById("clear-done");
const charCount = document.getElementById("char-count");
const filterBtns = document.querySelectorAll(".filter-btn");

function renderTasks() {
  list.innerHTML = "";

  for (const task of tasks) {
    if (currentFilter === "active" && task.done) continue;
    if (currentFilter === "done" && !task.done) continue;

    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.done) {
      li.classList.add("done");
    }

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("task-text");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

  updateCounter();
}

function updateCounter() {
  let remaining = 0;
  for (const task of tasks) {
    if (task.done === false) {
      remaining++;
    }
  }

  counter.textContent = remaining + " task(s) remaining";

  if (tasks.length === 0) {
    emptyMsg.classList.remove("hidden");
  } else {
    emptyMsg.classList.add("hidden");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") return;

  for (const task of tasks) {
    if (task.text.toLowerCase() === text.toLowerCase()) {
      return;
    }
  }

  const newTask = { id: nextId, text: text, done: false };
  tasks.push(newTask);
  nextId++;

  input.value = "";
  charCount.textContent = "0 / 50";
  renderTasks();
});

list.addEventListener("click", function (event) {
  const target = event.target;
  const isText = target.classList.contains("task-text");
  const isDelete = target.classList.contains("delete-btn");

  if (!isText && !isDelete) return;

  const id = Number(target.parentElement.dataset.id);

  if (isText) {
    for (const task of tasks) {
      if (task.id === id) {
        task.done = !task.done;
      }
    }
    renderTasks();
  }

  if (isDelete) {
    const newArray = [];
    for (const task of tasks) {
      if (task.id !== id) {
        newArray.push(task);
      }
    }
    tasks = newArray;
    renderTasks();
  }
});

clearDoneBtn.addEventListener("click", function () {
  const remainingTasks = [];
  for (const task of tasks) {
    if (task.done === false) {
      remainingTasks.push(task);
    }
  }
  tasks = remainingTasks;
  renderTasks();
});

input.addEventListener("input", function () {
  charCount.textContent = input.value.length + " / 50";
});

for (const btn of filterBtns) {
  btn.addEventListener("click", function () {
    currentFilter = btn.dataset.filter;

    for (const b of filterBtns) {
      b.classList.remove("active");
    }
    btn.classList.add("active");

    renderTasks();
  });
}

renderTasks();
