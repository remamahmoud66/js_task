function getUsers() {
  const data = localStorage.getItem("users");
  if (data === null) return [];
  return JSON.parse(data);
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
  const data = localStorage.getItem("currentUser");
  if (data === null) return null;
  return JSON.parse(data);
}

function setCurrentUser(user) {
  const safeUser = { name: user.name, email: user.email, role: user.role };
  localStorage.setItem("currentUser", JSON.stringify(safeUser));
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function isValidEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function createAdminAccount() {
  const users = getUsers();
  let adminExists = false;

  for (const user of users) {
    if (user.role === "admin") {
      adminExists = true;
    }
  }

  if (!adminExists) {
    users.push({
      name: "Admin",
      email: "admin@mission.com",
      password: "Admin123",
      role: "admin"
    });
    saveUsers(users);
  }
}

function showError(input, errorElement, message) {
  errorElement.textContent = message;
  input.classList.add("invalid");
}

function clearError(input, errorElement) {
  errorElement.textContent = "";
  input.classList.remove("invalid");
}

createAdminAccount();
