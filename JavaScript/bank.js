let withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  let withdrawValue = document.getElementById("withdraw-value");
  let showWithdrawValue = document.getElementById("show-withdraw-value");
  showWithdrawValue.innerText = withdrawValue.value;

  let totalAmount = document.getElementById("total-amount");
  if (withdrawValue.value < totalAmount.innerText) {
    totalAmount.innerText = totalAmount.innerText - withdrawValue.value;
  } else {
    alert("Not enough money");
  }
});
