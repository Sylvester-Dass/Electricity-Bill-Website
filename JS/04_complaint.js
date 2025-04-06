document.addEventListener("DOMContentLoaded", function () {
  let custId = localStorage.getItem("setCustomerId");
  document.getElementById("displayCustomerId").textContent = custId;
});

const categories = {
  "Billing Related": [
    "Wrong Bill Amount",
    "Payment Not Reflected",
    "Meter Reading Issue",
  ],
  "Voltage Related": [
    "High Voltage Fluctuation",
    "Low Voltage Supply",
    "Phase Imbalance",
  ],
  "Frequent Disruption": [
    "Power Cuts During Peak Hours",
    "Intermittent Power Supply",
    "Transformer Failure",
  ],
  "Street Light Related": [
    "Street Light Not Working",
    "Flickering Street Light",
  ],
  "Pole Related": ["Broken Pole", "Leaning Pole", "Installation"],
};

function updateCategories() {
  let complaintType = document.getElementById("complaintType").value;
  let categoryDropdown = document.getElementById("category");
  categoryDropdown.innerHTML = "<option value=''>Select Category</option>";

  if (complaintType) {
    categoryDropdown.disabled = false;
    categories[complaintType].forEach((category) => {
      let option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryDropdown.appendChild(option);
    });
  } else {
    categoryDropdown.disabled = true;
  }
}

document
  .getElementById("complaintForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const selectElement1 = document.getElementById("complaintType");
    if (!selectElement1.value) {
      alert("Please select an option.");
    }
    const selectElement2 = document.getElementById("category");
    if (!selectElement2.value) {
      alert("Please select an option.");
    }

    let desc = document.getElementById("problemDesc").value;
    localStorage.setItem("setProblemDesc", desc);

    const requiredInputs = document.querySelectorAll(
      "#paymentForm input[required]"
    );
    let allFilled = true;

    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        allFilled = false;
        input.reportValidity();
      }
    });

    if (allFilled) {
      window.location.href = "../HTML/04a_complaint_success.html";
    }
  });

function isAlphabet(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 97 && charCode <= 122) ||
    charCode === 32
  ) {
    return true;
  }
  event.preventDefault();
  return false;
}

function isNumberKey(event) {
  if (event.keyCode < 96 || event.keyCode > 105) {
    return true;
  }
  event.preventDefault();
  return false;
}
