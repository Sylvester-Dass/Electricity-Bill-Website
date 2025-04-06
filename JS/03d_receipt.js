function generateRandomNumber(length) {
  return Math.floor(Math.random() * Math.pow(10, length));
}

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function loadTransactionData() {
  document.getElementById("transactionNumber").textContent =
    generateRandomNumber(10);
  document.getElementById("receiptNumber").textContent =
    generateRandomNumber(10);
  document.getElementById("transactionDate").textContent = formatDate(
    new Date()
  );
  document.getElementById("transactionType").textContent = "DC";
  document.getElementById("paymentType").textContent = "Registered User";
  document.getElementById("paymentGateway").textContent = "EFG Payment Gateway";
  document.getElementById("sectionName").textContent = "ABC";
  document.getElementById("billNumber").textContent =
    localStorage.getItem("setBillNumber") || "0";
  document.getElementById("consumerNumber").textContent =
    localStorage.getItem("setCustomerId") || "Unknown";
  document.getElementById("billAmount").textContent =
    "Rs. " + (localStorage.getItem("setAmount") || "0.0");
  document.getElementById("paidAmount").textContent =
    "Rs. " + (localStorage.getItem("setAmount") || "0.0");
  document.getElementById("status").textContent = "Payment Done Successfully";
  document.getElementById("acknowledgementDate").textContent = formatDate(
    new Date()
  );
}

function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Transaction Receipt", 14, 20);
  doc.setFontSize(12);

  const table = document.getElementById("transactionTable");
  const rows = table.getElementsByTagName("tr");

  let y = 30;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("th");
    const values = rows[i].getElementsByTagName("td");

    if (cells.length && values.length) {
      doc.text(`${cells[0].innerText}:`, 14, y);
      doc.text(`${values[0].innerText}`, 80, y);
      y += 10;
    }
  }

  doc.save("Electricity_Bill_Payment_Receipt_PowerBill");
}

loadTransactionData();

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back();
});
