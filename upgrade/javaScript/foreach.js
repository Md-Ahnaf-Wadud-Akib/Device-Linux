const numbers = [23, 46, 74, 98];

const add5 = (num) => {
  //   console.log(num + 5);
  return num + 5;
};

const result = numbers.forEach(add5);

// console.log(result);

const players = [54, 56, 79, 23, 47];

const selected = players.filter((p) => p > 50);
// console.log(selected);

const cats = [2, 3, 4, 5, 6, 7, 8, 9];

console.log(cats.map((p) => p));
