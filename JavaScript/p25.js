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

function changeText(){
    let thankYou = document.getElementById("thank-you");
    thankYou.innerText = "Thank you for clicking";
}

let clickMe = document.getElementById("click-me");
clickMe.addEventListener("click", changeText);

// Div1

let divStyle = document.getElementById("div1");
divStyle.style.padding = "30px 0px";


let textBox = document.getElementById("text-box");


function text(){
    inputText.innerText = textBox.value;    
}

let submitText = document.getElementById("submit");

let inputText = document.getElementById("input-text");

submitText.addEventListener("click", text);



function textDisplay(){
    textDefault.innerText = inputBox.value;
}
let inputBox = document.getElementById("input-box");
let textDefault = document.getElementById("default-text");
let buttonForSubmission = document.getElementById("submit-button");
buttonForSubmission.addEventListener("click", textDisplay);







