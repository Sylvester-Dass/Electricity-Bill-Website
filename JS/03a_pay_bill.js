document.addEventListener("DOMContentLoaded", function () {
  let custName = localStorage.getItem("setCustomerName");
  document.getElementById("displayName").textContent = custName;

  let custId = localStorage.getItem("setCustomerId") || "Guest";
  document.getElementById("displayId").textContent = custId;
  document.querySelectorAll(".displayId").forEach((element) => {
    element.textContent = custId;
  });
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

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".bill-items:checked").forEach((checkbox) => {
    let amountText = checkbox
      .closest("tr")
      .querySelector("td:last-child")
      .innerText.match(/Rs\.\s*(\d+)/);
    if (amountText) {
      total += parseInt(amountText[1]);
    }
  });
  document.getElementById("totalAmount").textContent = "Rs. " + total;
}

function openBillDetails() {
  let selectedItem = document.querySelectorAll(".bill-items:checked");
  if (selectedItem.length === 0) {
    alert("Select at least one item to proceed.");
  } else {
    window.location.href = "../HTML/03b_pay_bill_details.html";
  }
}

localStorage.setItem("setAmount", total);

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});
