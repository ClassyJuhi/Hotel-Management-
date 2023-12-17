document.getElementById("rooms").addEventListener("change", updateTotalAmount);
document
  .getElementById("endDate")
  .addEventListener("change", updateTotalAmount);

function updateTotalAmount() {
  var startDate = new Date(document.getElementById("startDate").value);
  var endDate = new Date(document.getElementById("endDate").value);
  var roomType = document.getElementById("rooms").value;

  // Calculate the duration in days
  var duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  // Set rates based on room type using if-else conditions
  var ratePerDay;
  if (roomType === "Executive") {
    ratePerDay = 25000;
  } else if (roomType === "Family") {
    ratePerDay = 55000;
  } else if (roomType === "Suite") {
    ratePerDay = 100000;
  } else {
    ratePerDay = 0; // Default rate if no match is found
  }

  // Calculate total amount
  var totalAmount = duration * ratePerDay;

  // Update the total amount display
  document.getElementById("totalAmount").innerText = totalAmount;
}







let payNowButton = document.getElementById('pay-now-button');
let stripe = Stripe('pk_test_51ONGDvSE6zmm4NaLsZthMEqBD5dSya6vNwvvmrfa33jTBE767rWVWVeoCFthoGu4j7marJv9QRd41ur60Wur6T5S00tPcm67Gk');
payNowButton.addEventListener('click', function () {
  paymentFormContainer.style.display = 'block';
});

















// // script.js
// document.addEventListener('DOMContentLoaded', function () {
//   let stripe = Stripe('pk_test_51ONGDvSE6zmm4NaLsZthMEqBD5dSya6vNwvvmrfa33jTBE767rWVWVeoCFthoGu4j7marJv9QRd41ur60Wur6T5S00tPcm67Gk');
//   let elements = stripe.elements();
//   let cardElement = elements.create('card');
//   cardElement.mount('#card-element');

//   let form = document.getElementById('payment-form');
//   let payNowButton = document.getElementById('pay-now-button');
//   let paymentFormContainer = document.getElementById('payment-form-container');

//   payNowButton.addEventListener('click', function () {
//     paymentFormContainer.style.display = 'block';
//   });

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     }).then(handlePaymentMethod);
//   });

//   function handlePaymentMethod(result) {
//     if (result.error) {
//       let errorElement = document.getElementById('error-message');
//       errorElement.textContent = result.error.message;
//     } else {
//       let paymentMethodId = result.paymentMethod.id;
//       // In a real-world scenario, send paymentMethodId to your server for further processing
//       alert('Payment successful!'); // Replace with your actual success handling
//     }
//   }
// });
