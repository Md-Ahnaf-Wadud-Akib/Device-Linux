let darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", function () {
  let body = document.body;
  body.style.backgroundColor = "black";
  darkMode.style.backgroundColor = "white";
  darkMode.style.color = "black";
  darkMode.innerText = "White Mode";

  darkMode.addEventListener("click", function () {
    body.style.backgroundColor = "white";
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
    darkMode.innerText = "Dark Mode";
  });
});

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    let mailAddress = document.getElementById("mail-address");
    let userPassword = document.getElementById("user-password");
    if(mailAddress.value === "luffy@onepiece.com" && userPassword.value === "12345"){
        window.location.href = "welcome.html";
    }
    else{
        alert("Wrong user name and password");
    }
});
