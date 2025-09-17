const greet = function () {
    console.log("hello, i'm function expression");
}
// greet();


// function expression with parameter
// const greetUser = function (name) {
//     console.log(`Hello, ${name}, welcome to JavaScript functions!`);
// };
// greetUser('Partho');

// const square = function (num) {
//     return num * num;
// }
// console.log("squre: ", square(5));

// const add = function (a, b) {
//     return a + b;
// }
// console.log("sum: ", add(5, 10));



// padd function exprassion as argument
// function doOperation(operation, x, y){
//     return operation(x, y)
// }
// let subtract = function(a, b){
//     return a - b;
// }
// console.log("subtraction: ", doOperation(subtract, 10, 5));

let operations = [
    function(x) { return x + 1;},
    function(x) { return x * 2;}
];
console.log('operations[0](5):', operations[0](2)); // Output: 6
console.log('operations[1](5):', operations[1](3)); // Output: 10






































