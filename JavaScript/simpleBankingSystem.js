let submit = document.getElementById("submit-button");
submit.addEventListener("click", function () {
  let mailBox = document.getElementById("mail-box");
  let mail = mailBox.value;

  let passwordBox = document.getElementById("password-box");
  let password = passwordBox.value;

  if (mail === "protiva@gmail.com" && password === "12345") {
    window.location.href = "welcomeToBank.html";
  } else {
    alert("Wrong user name or password");
  }
});

let operation = document.getElementById("abcButton");
operation.addEventListener("click", function () {
  let textArea = document.getElementById("textAbc");
  let show = document.getElementById("out-box");
  show.value = textArea.value;

  
});
console.log(operation);

