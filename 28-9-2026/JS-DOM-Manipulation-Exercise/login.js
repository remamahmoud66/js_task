const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formMessage = document.getElementById("form-message");

const loggedUser = getCurrentUser();
if (loggedUser !== null) {
  if (loggedUser.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  let isValid = true;

  clearError(emailInput, emailError);
  clearError(passwordInput, passwordError);
  formMessage.textContent = "";
  formMessage.className = "message";

  if (email === "") {
    showError(emailInput, emailError, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, emailError, "Please enter a valid email");
    isValid = false;
  }

  if (password === "") {
    showError(passwordInput, passwordError, "Password is required");
    isValid = false;
  }

  if (!isValid) return;

  const users = getUsers();
  let foundUser = null;

  for (const user of users) {
    if (user.email === email && user.password === password) {
      foundUser = user;
    }
  }

  if (foundUser === null) {
    formMessage.textContent = "Wrong email or password";
    formMessage.classList.add("error-msg");
    return;
  }

  setCurrentUser(foundUser);

  if (foundUser.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
});
