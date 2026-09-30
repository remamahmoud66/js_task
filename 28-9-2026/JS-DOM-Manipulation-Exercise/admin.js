const currentUser = getCurrentUser();

if (currentUser === null) {
  window.location.href = "index.html";
} else if (currentUser.role !== "admin") {
  window.location.href = "dashboard.html";
} else {
  showUsers();
}

function showUsers() {
  const users = getUsers();
  const table = document.getElementById("users-table");

  document.getElementById("admin-info").textContent = "Logged in as " + currentUser.name + " (" + currentUser.email + ")";
  document.getElementById("users-count").textContent = "Total registered users: " + users.length;

  table.innerHTML = "";

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const row = document.createElement("tr");

    const numberCell = document.createElement("td");
    numberCell.textContent = i + 1;

    const nameCell = document.createElement("td");
    nameCell.textContent = user.name;

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;

    const roleCell = document.createElement("td");
    const badge = document.createElement("span");
    badge.textContent = user.role;
    badge.classList.add("badge");
    if (user.role === "admin") {
      badge.classList.add("admin");
    }
    roleCell.appendChild(badge);

    row.appendChild(numberCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(roleCell);
    table.appendChild(row);
  }
}

document.getElementById("logout-btn").addEventListener("click", logout);
