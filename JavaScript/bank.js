let withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  let withdrawBox = document.getElementById("withdraw-value");
  let withdrawValue = withdrawBox.value;
  let newWithdrawValueFloat = parseFloat(withdrawValue);

  let showWithdraw = document.getElementById("show-withdraw-value");
  let previousShowWithdraw = showWithdraw.innerText;
  let previousShowWithdrawFloat = parseFloat(previousShowWithdraw);

  let currentWithdraw = previousShowWithdrawFloat + newWithdrawValueFloat;
  showWithdraw.innerText = currentWithdraw;

  withdrawBox.value = "";

  // total amount minus
  let currentWithdrawFloat = parseFloat(currentWithdraw);
  
  // getting total amount 
  let totalAmount = document.getElementById("total-amount");
  let totalAmountFloat = parseFloat(totalAmount.innerText);
  if (currentWithdrawFloat < totalAmountFloat) {
    let currentTotalAmount = totalAmountFloat - currentWithdrawFloat;

    totalAmount.innerText = currentTotalAmount;
  } else {
    alert("Not enough money to withdraw");
  }
});
