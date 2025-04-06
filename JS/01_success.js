window.onload = function () {
  const name = localStorage.getItem("setCustomerName");
  const email = localStorage.getItem("setCustomerEmail");
  const id = localStorage.getItem("setCustomerId");

  if (!name || !email || !id) {
    alert("No registration data found.");
    window.location.href = "../HTML/01_register.html";
    return;
  }

  document.getElementById("displayName").textContent = name;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayId").textContent = id;
};

function registerAgain() {
  localStorage.clear();
  window.location.href = "../HTML/01_register.html";
}

function goHome() {
  window.location.href = "../HTML/02_home.html";
}
