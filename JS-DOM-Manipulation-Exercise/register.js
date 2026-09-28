const registerForm = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm-password");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");
const formMessage = document.getElementById("form-message");

if (getCurrentUser() !== null) {
  window.location.href = "dashboard.html";
}

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;
  const confirmPassword = confirmInput.value;
  let isValid = true;

  clearError(nameInput, nameError);
  clearError(emailInput, emailError);
  clearError(passwordInput, passwordError);
  clearError(confirmInput, confirmError);
  formMessage.textContent = "";
  formMessage.className = "message";

  if (name === "") {
    showError(nameInput, nameError, "Name is required");
    isValid = false;
  } else if (name.length < 3) {
    showError(nameInput, nameError, "Name must be at least 3 characters");
    isValid = false;
  }

  const users = getUsers();

  if (email === "") {
    showError(emailInput, emailError, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError(emailInput, emailError, "Please enter a valid email");
    isValid = false;
  } else {
    for (const user of users) {
      if (user.email === email) {
        showError(emailInput, emailError, "This email is already registered");
        isValid = false;
      }
    }
  }

  if (password === "") {
    showError(passwordInput, passwordError, "Password is required");
    isValid = false;
  } else if (password.length < 6) {
    showError(passwordInput, passwordError, "Password must be at least 6 characters");
    isValid = false;
  } else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    showError(passwordInput, passwordError, "Password must contain letters and numbers");
    isValid = false;
  }

  if (confirmPassword === "") {
    showError(confirmInput, confirmError, "Please confirm your password");
    isValid = false;
  } else if (confirmPassword !== password) {
    showError(confirmInput, confirmError, "Passwords do not match");
    isValid = false;
  }

  if (!isValid) return;

  const newUser = {
    name: name,
    email: email,
    password: password,
    role: "user"
  };

  users.push(newUser);
  saveUsers(users);

  registerForm.reset();
  formMessage.textContent = "Account created successfully! Redirecting to login...";
  formMessage.classList.add("success-msg");

  setTimeout(function () {
    window.location.href = "index.html";
  }, 1500);
});
