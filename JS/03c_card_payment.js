document.addEventListener("DOMContentLoaded", function () {
  let amount = localStorage.getItem("setAmount");
  document.getElementById("displayAmount").textContent = amount;

  const cardInput = document.getElementById("cardNumber");
  cardInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 12) {
      value = value.slice(0, 12);
    }

    let spacedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        spacedValue += " ";
      }
      spacedValue += value[i];
    }
    e.target.value = spacedValue;
  });

  const form = document.getElementById("cardPayment");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
      window.location.href = "../HTML/03d_receipt.html";
    } else {
      form.reportValidity();
    }
  });
});

document.getElementById("cvv").addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/\D/g, "");
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
  const charCode = event.which ? event.which : event.keyCode;
  return charCode >= 48 && charCode <= 57;
}
