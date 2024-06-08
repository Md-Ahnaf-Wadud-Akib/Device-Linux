// console.log("Hello linux");

function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments);
    console.log("the 5th value is: ", arguments[4]);
}

add(12, 34, 45, 67, 89);