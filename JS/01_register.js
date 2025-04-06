document.addEventListener("DOMContentLoaded", function () {
  var input = document.querySelector("#customerMobile");

  if (input) {
    var iti = window.intlTelInput(input, {
      initialCountry: "in",
      separateDialCode: true,
      preferredCountries: ["us", "gb", "in"],
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  } else {
    console.error("Error: #customerMobile not found in the DOM.");
  }
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const custName = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const custMobile = document.getElementById("customerMobile").value.trim();
    const pass = document.getElementById("password").value.trim();
    const confirmPass = document.getElementById("confirmPassword").value.trim();
    const custId = generateCustomerId();
    const userId = document.getElementById("customerUserId").value.trim();

    if (!custName || !email || !custMobile || !pass || !confirmPass) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (pass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    if (
      custMobile === "0000000000" ||
      custMobile.length !== 10 ||
      isNaN(custMobile)
    ) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    localStorage.setItem("setCustomerId", custId);
    localStorage.setItem("setCustomerName", custName);
    localStorage.setItem("setCustomerEmail", email);
    localStorage.setItem("setPassword", pass);
    localStorage.setItem("setCustomerUserId", userId);

    window.location.href = "../HTML/01_success.html";
  });

function generateCustomerId() {
  return Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
}

function isNumberKey(event) {
  const charCode = event.which ? event.which : event.keyCode;
  return charCode >= 48 && charCode <= 57;
}

function openHome() {
  window.location.href = "../HTML/02_home.html";
}

function openRegister() {
  window.location.href = "../HTML/01_register.html";
}

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});
