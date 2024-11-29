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

// console.log(cats.map((p) => p));
// console.log(cats.filter((c) => c % 2 !== 0));

const products = [
  { id: 1, title: "Samsung", price: 20000 },
  { id: 2, title: "Iphone", price: 50000 },
  { id: 3, title: "Vivo", price: 30000 },
  { id: 4, title: "Oppo", price: 12000 },
];

const result1 = products.map((product) => product.title);
// console.log(result1);

const result2 = products.filter((p) => {
  let t = p * 2;
  console.log(t);
});
