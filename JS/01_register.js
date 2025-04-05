document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    // window.location.href = "02_home.html";

    let customerId = generateCustomerId();
    let custName = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    let phone = document.getElementById("customerMobile").value;
    if (phone === "0000000000") {
      alert("Phone number cannot be 0000000000");
      return;
    }
    phone.value = phone.value.replace(/\D/g, "");

    let emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    document.getElementById("generatedId").textContent = customerId;
    document.getElementById("displayName").textContent = custName;
    document.getElementById("displayEmail").textContent = email;

    document.querySelector(".container").classList.add("hidden");
    document.getElementById("acknowledgmentScreen").classList.remove("hidden");

    localStorage.setItem("customerId", customerId);
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("password", password);
    localStorage.setItem("confPassword", confirmPassword);
    alert("Registered Successfully!");
  });

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let loginUsername = document.getElementById("loginUsername").value;
      let loginPassword = document.getElementById("loginPassword").value;
      let loginConfPassword =
        document.getElementById("loginConfPassword").value;
      let storedUsername = localStorage.getItem("customerName");
      let storedPassword = localStorage.getItem("password");
      // let storedConfPassword = localStorage.getItem("confPassword");
      if (loginPassword !== loginConfPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (
        loginUsername === storedUsername &&
        loginPassword === storedPassword
      ) {
        alert("Login Successful!");
        window.location.href = "02_home.html";
      } else {
        alert("Invalid Credentials!");
      }
    });
});

function generateCustomerId() {
  return Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
}

function openHome() {
  window.location.href = "../HTML//02_home.html";
}
