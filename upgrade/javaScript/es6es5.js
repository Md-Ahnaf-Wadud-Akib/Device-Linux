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

// console.log(product.productList[1].name);
// console.log(product.productList[1].weight);
function multiply(inputArray) {
  let result = [];
  for (i = 0; i <= inputArray.length - 1; i++) {
    let element = inputArray[i];
    result.push(element * 2);
  }
  return result;
}

let doubleIt = (num) => num * 2;

let test2 = [23, 56, 89, 85, 42];
let output3 = test2.map((num) => num * 2);
// console.log(output3);
let output2 = test2.map(doubleIt);
// console.log(output2);
let output = multiply(test2);
// console.log(output);

let names = ["Ahnaf", "Akib", "Fahmida", "Rahman"];
// console.log(names.map((name) => name.length));

// console.log(test2.forEach((n) => console.log(n)));

const filter2 = test2.filter(n => n==57);
// console.log(filter2);

const filterName = names.filter(p => p.length%2 === 1);
// console.log(filterName)