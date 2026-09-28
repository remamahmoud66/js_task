const currentUser = getCurrentUser();

if (currentUser === null) {
  window.location.href = "index.html";
} else {
  document.getElementById("user-name").textContent = "Welcome, " + currentUser.name;
  document.getElementById("user-details").textContent = currentUser.email + " • " + currentUser.role;
}

document.getElementById("logout-btn").addEventListener("click", logout);
