// console.log("Hello linux");

// function add(num1, num2){
//     console.log(num1, num2);
//     console.log(arguments);
//     console.log("the 5th value is: ", arguments[4]);
// }

// add(12, 34, 45, 67, 89);

// let abcArray = [2, 3, 4, 5, 6, 7, 8, 9];

// for(let element of abcArray){
//     console.log(element);
// }

function productElements(products){
    for(let product of products){
        console.log(product);
    }
}

let input =[
    {name: "Samsung", camera: 50, price: 12000, ram: 8},
    {name: "Walton", camera: 13, price: 7000, ram: 2},
    {name: "Oppo", camera: 36, price: 92000, ram: 4},
    {name: "Nokia", camera: 25, price: 22000, ram: 6},
    {name: "iphone", camera: 13, price: 2000, ram: 9}
];

productElements(input);