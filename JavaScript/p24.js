// // console.log("hello p24.js")

// // let paragraph = document.getElementsByTagName("p");
// // console.log(paragraph);

// // let liElements = document.getElementsByTagName("li");
// // for(li of liElements){
// //     console.log(li);
// // }

// // let pineapple = document.getElementById("change-text");
// // console.log(pineapple.innerText);

// let sections = document.querySelectorAll("section");
// for (let section of sections) {
//   section.style.border = "5px solid gray";
//   section.style.margin = "30px 80px";
//   section.style.padding = "80px";
// }

// let blueSection = document.getElementById("bg-blue");
// blueSection.style.backgroundColor = "blue";

// let textAlignment = document.getElementById("section2-title");

// textAlignment.style.textAlign = "center";

// let footerText = document.querySelector("footer h3").style.textAlign = "center";


// let addingLi = document.getElementById("listItems");

// let createLi = document.createElement("li");
// createLi.innerText = "Wood Apple";

// addingLi.appendChild(createLi);

// let flowerList = document.childNodes("flower");
// console.log(flowerList);
// let createFlower = document.createElement("li").innerText = "Water Lily";
// flowerList.appendChild(createFlower);

// let mainSection = document.getElementById("mainBodySection");

// let section4 = document.createElement("section");

// let h1 = document.createElement("h1");
// h1.innerText = "How to manipulate HTML in JS";
// section4.appendChild(h1);

// let ul = document.createElement("ul");

// let li1 = document.createElement("li");
// li1.innerText = "1. Choose Where to add";
// ul.appendChild(li1);


// let li2 = document.createElement("li");
// li2.innerText = "2. Choose What to add";
// ul.appendChild(li2);

// let li3 = document.createElement("li");
// li3.innerText = "3. AppendChild";
// ul.appendChild(li3);

// section4.appendChild(ul);


// mainSection.appendChild(section4);


// Corrected and annotated code

// Retrieve the element with id "mainBodySection" from the document


console.log(document.getElementById("mainBodySection"));

// Create a <section> element
let section4 = document.createElement("section");

// Create an <h1> element
let h1 = document.createElement("h1");
h1.innerText = "How to manipulate HTML in JS";
section4.appendChild(h1);

// Create a <ul> element
let ul = document.createElement("ul");

// Create <li> elements and append them to the <ul>
let li1 = document.createElement("li");
li1.innerText = "1. Choose Where to add";
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.innerText = "2. Choose What to add"; // Fixed numbering typo here
ul.appendChild(li2);

let li3 = document.createElement("li");
li3.innerText = "3. AppendChild"; // Fixed numbering typo here
ul.appendChild(li3);

// Append the <ul> to the <section>
section4.appendChild(ul);

// Append the <section> to the main section with id "mainBodySection"
// mainSection.appendChild(section4);


let section5 = document.createElement("section");

section5.innerHTML = `
<h1> Hello HTML</h1>
`

mainSection.appendChild(section5);

console.log(mainSection);







