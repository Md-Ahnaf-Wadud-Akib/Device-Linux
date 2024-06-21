// console.log("hello p24.js")

// let paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// let liElements = document.getElementsByTagName("li");
// for(li of liElements){
//     console.log(li);
// }

// let pineapple = document.getElementById("change-text");
// console.log(pineapple.innerText);

let sections = document.querySelectorAll("section");
for(let section of sections){
    section.style.border = "5px solid gray";
    section.style.margin = "30px 80px";
    section.style.padding = "80px";
}

let blueSection = document.getElementById("bg-blue");
blueSection.style.backgroundColor = "blue";

