let withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  let withdrawField = document.getElementById("withdraw-field");
  let withdrawValue = parseFloat(withdrawField.value);
  if (isNaN(withdrawValue)) {
    alert("Please enter valid amount");
    return;
  }
  withdrawField.value = "";
  let withdrawPreviousField = document.getElementById(
    "withdraw-previous-field"
  );
  let withdrawPreviousValue = parseFloat(withdrawPreviousField.innerText);

  let totalAmountField = document.getElementById("total-amount-field");
  let totalAmountNumber = parseFloat(totalAmountField.innerText);

  if (withdrawValue > totalAmountNumber) {
    alert("Not enough money to withdraw");
    return;
  }

  let showWithdrawAmount = withdrawValue + withdrawPreviousValue;
  withdrawPreviousField.innerText = showWithdrawAmount;

  let currentAmountNumber = totalAmountNumber - withdrawValue;

  totalAmountField.innerText = currentAmountNumber;
});
