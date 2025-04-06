function isNumberKey(event) {
  const charCode = event.which ? event.which : event.keyCode;
  return charCode >= 48 && charCode <= 57;
}

function getComplaintStatus() {
  let complaintNumber = document.getElementById("complaint-number").value;
  if (complaintNumber === "") {
    alert("Please enter a complaint number.");
    return;
  }

  document.getElementById("complaint-status").style.display = "block";
  let solved = Math.random() < 0.5;
  if (solved) {
    document.getElementById("complaintStatus").textContent =
      "Your complaint has been resolved.";
  } else {
    document.getElementById("complaintStatus").textContent =
      "Your complaint request is being processed.";
  }
}

function checkStatus() {
  const id = document.getElementById("complaint-id").value.trim();
  if (id) document.getElementById("status-card").style.display = "block";
}

function resetForm() {
  document.getElementById("complaint-id").value = "";
  document.getElementById("status-card").style.display = "none";
}

function closeStatus() {
  document.getElementById("status-card").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("displayCustId").textContent =
    localStorage.getItem("setCustomerId");
  document.getElementById("displayCustName").textContent =
    localStorage.getItem("setCustomerName");
  document.getElementById("displayProbDesc").textContent =
    localStorage.getItem("setProblemDesc");
});

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

document.getElementById("lastUpdatedDate").textContent = formattedDate;

function getRandomFutureDate() {
  const today = new Date();
  const daysToAdd = Math.floor(Math.random() * 2) + 2;
  today.setDate(today.getDate() + daysToAdd);

  return today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

document.getElementById("futureDate").textContent = getRandomFutureDate();
