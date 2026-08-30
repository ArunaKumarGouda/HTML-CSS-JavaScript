// Fixed credentials
const validUsername = "Aruna";
const validEmail = "aruna1234@gmail.com";
const validPassword = "9510";

function login() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === validUsername && email === validEmail && password === validPassword) {
    // Redirect to dashboard page
    window.location.href = "dashboard.html";
  } else {
    message.textContent = "❌ Invalid details. Please try again!";
    message.className = "message error";
  }
}
