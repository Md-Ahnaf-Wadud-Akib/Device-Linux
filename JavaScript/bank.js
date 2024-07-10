let withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", function () {
  let withdrawBox = document.getElementById("withdraw-value");
  let withdrawValue = withdrawBox.value;
  let withdrawValueFloat = parseFloat(withdrawValue);

  let showWithdraw = document.getElementById("show-withdraw-value");
  showWithdraw.innerText = withdrawValueFloat;
  let showWithdrawFloat = parseFloat(showWithdraw.innerText);

  
});
