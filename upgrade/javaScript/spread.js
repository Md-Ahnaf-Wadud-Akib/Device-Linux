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

const price = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(productPrice of price){
    console.log(productPrice);
}
