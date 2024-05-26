document.getElementById("overviewButton").addEventListener("click", function() {
  var details = document.getElementById("details");
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
});

const form = document.getElementById("buyNowForm");

const btn = document.getElementById("buyNow");

const span = document.getElementsByClassName("close")[0];

const paymentSelect = document.getElementById("payment");
const creditCardInfo = document.getElementById("creditCardInfo");
const bankTransferInfo = document.getElementById("bankTransferInfo");
const paypalInfo = document.getElementById("paypalInfo");
const gcashInfo = document.getElementById("gcashInfo");

btn.onclick = function() {
  form.style.display = "block";
}

span.onclick = function() {
  form.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
  }
}

paymentSelect.onchange = function() {
  var selectedPayment = paymentSelect.value;
  
  creditCardInfo.style.display = "none";
  bankTransferInfo.style.display = "none";
  paypalInfo.style.display = "none";
  gcashInfo.style.display = "none";

  creditCardNumber.removeAttribute('required');
  bankAccountNumber.removeAttribute('required');
  paypalEmail.removeAttribute('required');
  gcashPhoneNumber.removeAttribute('required');
  
  if (selectedPayment === "credit-card") {
    creditCardInfo.style.display = "block";
    creditCardNumber.setAttribute('required', 'required');
  } else if (selectedPayment === "bank-transfer") {
    bankTransferInfo.style.display = "block";
    bankAccountNumber.setAttribute('required', 'required');
  } else if (selectedPayment === "paypal") {
    paypalInfo.style.display = "block";
    paypalEmail.setAttribute('required', 'required');
  } else if (selectedPayment === "gcash") {
    gcashInfo.style.display = "block";
    gcashPhoneNumber.setAttribute('required', 'required');
  }
  
}

document.getElementById("buyNowForm").onsubmit = function(event) {
  event.preventDefault();
  
  document.getElementById("loading").style.display = "block";
  
  setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  }, 2000);
}

