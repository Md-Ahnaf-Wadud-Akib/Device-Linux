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
console.log(`The result is ${result}`);
