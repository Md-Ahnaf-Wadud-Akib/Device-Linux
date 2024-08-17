let withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  let withdrawBox = document.getElementById("withdraw-value");
  let withdrawValue = withdrawBox.value;
  let newWithdrawValueFloat = parseFloat(withdrawValue);

  if (isNaN(newWithdrawValueFloat)) {
    alert("please enter a valid number");
    return;
  }

  let showWithdraw = document.getElementById("show-withdraw-value");
  let previousShowWithdraw = showWithdraw.innerText;
  let previousShowWithdrawFloat = parseFloat(previousShowWithdraw);

  withdrawBox.value = "";

  let totalAmountField = document.getElementById("total-amount");
  let totalAmountString = totalAmountField.innerText;
  let totalAmountNumber = parseFloat(totalAmountString);

  if (newWithdrawValueFloat > totalAmountNumber) {
    alert("error");
    return;
  }
  let currentWithdraw = previousShowWithdrawFloat + newWithdrawValueFloat;
  showWithdraw.innerText = currentWithdraw;

  let totalAmountLeft = totalAmountNumber - newWithdrawValueFloat;
  totalAmountField.innerText = totalAmountLeft;
});
