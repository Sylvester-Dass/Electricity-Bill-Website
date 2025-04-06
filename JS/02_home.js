document.addEventListener("DOMContentLoaded", function () {
  let custName = localStorage.getItem("setCustomerName");
  document.getElementById("displayName").textContent = custName;
});

function openPayBill() {
  window.location.href = "../HTML/03a_pay_bill.html";
}

function openCompForm() {
  window.location.href = "../HTML/04_complaint.html";
}

function openCompStatus() {
  window.location.href = "../HTML/04a_complaint_status.html";
}

function openLogin() {
  sessionStorage.clear();
  window.location.replace("01_login.html");
  window.location.href = "../HTML/01_login.html";
}
