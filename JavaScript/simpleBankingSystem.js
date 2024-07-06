let submitBox = document.getElementById("submit-button");
submitBox.addEventListener("click", function () {
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

