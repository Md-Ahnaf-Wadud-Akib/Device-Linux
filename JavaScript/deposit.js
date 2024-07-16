document.getElementById("deposit-btn").addEventListener("click", function(){
    let depositField = document.getElementById("deposit-field");
    let depositNumber = parseFloat(depositField.value);
    

    let showDepositField = document.getElementById("show-deposit-field");
    let showDepositNumber = parseFloat(showDepositField.innerText);
    

    showDepositField.innerText = depositNumber + showDepositNumber;
    depositField.value = "";

    let totalAmount = document.getElementById("total-amount");
    let totalAmountNumber = parseFloat(totalAmount.innerText);
    
    let totalAmountLeft = totalAmountNumber + depositNumber;

    document.getElementById("total-amount").innerText = totalAmountLeft;
})