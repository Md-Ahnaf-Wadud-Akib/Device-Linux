// function maxValue(array) {
//   maxElement = 0;
//   for (i = 0; i <= array.length; i++) {
//     let index = i;
//     let element = array[index];
//     if (element > maxElement) {
//       maxElement = element;
//     }
//   }
//   return maxElement;
// }

// const abcArray = [23, 97, 56, 74, 568, 78, 54, 37, 26];
// const maxValue = Math.max(...abcArray);
// console.log(maxValue);
// const result = maxValue(abcArray);
// console.log(`The max value of ${abcArray} is: ${result}`);

// const ahnaf = ["mango", "potato", "spice", "Singara"];
// const akib = ["chicken", "rice"];

// // Combine both arrays using the spread operator
// const ahnafAkib = [...ahnaf, ...akib];
// console.log(ahnafAkib);

// let abcObject = {
//   name: "Nikko",
//   age: 4,
//   color: "White",
//   vaccine: "Yes",
// };

// const obkeys = Object.values(abcObject);
// // console.log(obkeys);
// // console.log(abcObject);

// const twoArray = Object.entries(abcObject);
// console.log(twoArray);

// function array2Dkeys(inputArray) {
//     for(i=0;i<=inputArray.length;i++){
//         let key = inputArray[i][0];
//         let value = inputArray[i][1];
//     }
//     console.log(`${key}: ${value}`);
// }
// let result = array2Dkeys(twoArray);
// console.log(result);

// let price = n => n.length;

// const productPrice = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(price(productPrice));
// for(price of productPrice){
//     console.log(price);
// }

let abcObject = [
  {
    name: "Ahnaf Akib",
    age: 26,
    education: "B. Sc in CSE",
  },
  {
    name: "Fahmida Rahman",
    age: 26,
    education: "B. Sc in English Literature",
  },

  {
    name: "Humayra Jannat",
    age: 25,
    education: "Department Of Botany",
  },
];


// console.log(abcObject[2].name);

let name1 = "Ahnaf Akib";
for(character of name1){
console.log(character);
}

let test1 = {
    name: "Ahnaf Akib",
    age: 26,
    education: "B. Sc in CSE",
  }

  for(let keys in test1){
    let value = test1[keys];
    console.log(keys, value);
  }