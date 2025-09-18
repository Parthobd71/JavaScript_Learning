function greet(name, callback) {
    let message = `Hello, ${name} !`;
    callback(message);
}
greet ("Partho", () => console.log("This is a callback function"));
greet("Partho", (msg) => console.log(msg));



function doOperation(a, b, operation){
    return operation(a, b);
} 
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log("Addition: ", doOperation(5, 10, add)); // Addition:  15
console.log("Multiplication: ", doOperation(5, 10, multiply)); // Multiplication:  50

