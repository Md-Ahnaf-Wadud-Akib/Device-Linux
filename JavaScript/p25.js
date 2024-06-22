function darkMode(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function whiteMode(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

let purple = document.getElementById("purpleMode");
function purpleBg(){
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "black";
}
purple.onclick = purpleBg;

let pinkMode = document.getElementById("pink-mode");
pinkMode.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";
})

let orangeMode = document.getElementById("orange-mode");
function orangeColor(){
    document.body.style.backgroundColor = "orange";
}
orangeMode.addEventListener("click", orangeColor);





