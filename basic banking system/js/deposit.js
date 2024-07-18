// document.body.style.backgroundColor = "black";

let depositSubBtn = document.getElementById("deposit-sub-btn");
depositSubBtn.addEventListener("click", function () {
  // deposit input value
  let depositInputField = document.getElementById("deposit-input-field");
  let depositInputValue = parseFloat(depositInputField.value);
  

  // deposit previous value
  let depositPreviousField = document.getElementById("deposit-previous-field");
  let depositPreviousValue = parseFloat(depositPreviousField.innerText);
  

  let depositCurrentValue = depositInputValue + depositPreviousValue;

  depositPreviousField.innerText = depositCurrentValue;

  // adding to total amount

  let totalAmountField = document.getElementById("total-amount-field");
  let totalAmountNumber = parseFloat(totalAmountField.innerText);

  let currentTotalNumber = totalAmountNumber + depositInputValue;
  
  totalAmountField.innerText = currentTotalNumber;

  document.getElementById("deposit-input-field").value = "";
});
