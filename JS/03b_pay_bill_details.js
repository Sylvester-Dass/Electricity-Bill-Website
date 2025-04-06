document.addEventListener("DOMContentLoaded", function () {
  const genBillNumber = Math.floor(100000 + Math.random() * 900000);

  let payAmount = localStorage.getItem("setAmount") || 0;

  document.getElementById("billAmount").textContent = payAmount;
  document.getElementById("totalPayAmount").textContent = payAmount;

  let custName = localStorage.getItem("setCustomerId");
  document.getElementById("displayCustomerId").textContent = custName;
  document.getElementById("displayBillNumber").textContent = genBillNumber;
  document.getElementById("payableAmount").textContent = payAmount;

  localStorage.setItem("setBillNumber", genBillNumber);
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

function openCardPayment() {
  window.location.href = "../HTML/03c_card_payment.html";
}

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});
