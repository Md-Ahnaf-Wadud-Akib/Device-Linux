let darkMode = document.getElementById("dark-mode");
darkMode.addEventListener("click", function dark(){
    let body = document.body;
    body.style.backgroundColor = "black";
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
    darkMode.innerText = "White Mode";

    darkMode.addEventListener("click", function white(){
        body.style.backgroundColor = "white";
        darkMode.style.backgroundColor = "black";
        darkMode.style.color = "white";
        darkMode.innerText = "Dark Mode";
    })
})