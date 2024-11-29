const numbers = [4, 5, 6, 8, 9, 7, 3];

function doubleIt(num) {
  return num * 2;
}

const result = numbers.map(doubleIt);

console.log(`the result is ${result}`);
