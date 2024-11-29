const numbers = [4, 5, 6, 8, 9, 7, 3];

function doubleIt(num) {
  return num * 2;
}

const result = numbers.map(doubleIt);

// console.log(`the result is ${result}`);

const double2 = (n) => n * 2;

const result2 = numbers.map(double2);
// console.log(`the resulted array is: ${result}`);

const num = [23, 45, 78, 93, 45];

const divBy2 = (n) => n / 2;

const result3 = num.map(divBy2);
// console.log(result3);
