let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    let emailField = document.getElementById("mail-field");
    let mailAddress = emailField.value;
    
    let passwordField = document.getElementById("password-field");
    let passWord = passwordField.value;
    
    if(mailAddress === "abc@gmail.com" && passWord === "abcde"){
        window.location.href = "abcBank.html";
    }
    else{
        alert("Invalid mail and password!!");
    }
})

