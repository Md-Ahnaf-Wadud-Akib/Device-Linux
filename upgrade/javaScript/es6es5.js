let sum = (a, b) => a + b;
// console.log(sum(2, 3));

let info = [
  { name: "Humayra Jannat", age: 25, education: "Botany" },
  { name: "Fahmida Rahman", age: 26, education: "English Literature" },
];
// console.log(info[1].education);
// console.log(info[0].name);

let product = {
  number: 5000,
  productList: [
    {
      id: 1,
      name: "Cat food",
      weight: "5kg",
      brand: "Drools",
    },
    {
      id: 2,
      name: "Cat Collar",
      color: "black",
      brand: "Bd",
    },
    {
      id: 3,
      name: "Dog Food",
      weight: "10kg",
      brand: "Lara",
    },
  ],
};

console.log(product.productList[1].name);
