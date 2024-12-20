// Find the smallest number in an array

function smallestNumber(inputArray) {
  let value = 0;
  for (i = 0; i <= inputArray.length; i++) {
    let element = inputArray[i];
    if (element > value) {
      value = element;
    }
    return value;
  }
}

let abcArray = [23, 56, 93, 104, 567];
let result = smallestNumber(abcArray);
// console.log(`The result is ${result}`);

function sumOfArray(inputArray2) {
  let sum = 0;
  for (let i = 0; i <= inputArray2; i++) {
    let element2 = inputArray2[i];
    sum += element2;
  }
  return sum;
}

let abcArray2 = [2, 3, 5, 9, 10];
let result2 = sumOfArray(abcArray2);
// console.log(`The result is: ${result2}`);

function largestNumber(inputArray3) {
  let value = 0;
  for (let i = 0; i <= inputArray3.length; i++) {
    let element = inputArray3[i];
    if (element > value) {
      value = element;
    }
  }
  return value;
}

let abcArray3 = [2, 3, 5, 6, 9];
let result3 = largestNumber(abcArray3);
console.log(`The largest number is: ${result3}`);
