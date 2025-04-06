document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let loginId = document.getElementById("loginUserId").value;
    let loginPass = document.getElementById("loginPassword").value;
    let loginConfPass = document.getElementById("loginConfirmPassword").value;
    let storedUserId = localStorage.getItem("setCustomerUserId");
    let storedPassword = localStorage.getItem("setPassword");

    if (loginPass !== loginConfPass) {
      alert("Passwords do not match!");
      return;
    }
    if (loginId === storedUserId && loginPass === storedPassword) {
      alert("Login Successful!");
      window.location.href = "02_home.html";
    } else {
      alert("Invalid Credentials!");
    }
  });

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// document.getElementById("year").textContent = new Date().getFullYear();
