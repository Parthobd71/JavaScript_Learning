function add(a, b){
    return a + b;
}
let sum = add(5, 10);
console.log("sum: ", sum);

function isEven(num){
    return num % 2 === 0;
}
console.log("is 4 even? ", isEven(4));
console.log("is 5 even? ", isEven(5));


function greet(name){
    return `Hello, ${name} !`;
}
console.log(greet('Partho'));


function getStatus(score){
    if(score >= 50){
        return 'pass';
    } else {
        return 'fail';
    }
}
console.log("status: ", getStatus(70)); // status:  pass
console.log("status: ", getStatus(30)); // status:  fail


function calculate(a, b){
    return{
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b
    };
}
console.log("calculations: ", calculate(10, 5));

function findColour(code){
    if(code === 1) return 'red';
    if(code === 2) return 'green';
    if(code === 3) return 'blue';
    return 'unknown';
}
console.log('Color : ', findColour(1)); // Color :  red
console.log('Color : ', findColour(2)); // Color :  green
console.log('Color : ', findColour(3)); // Color :  blue

console.log('Color : ', findColour(5)); // Color :  unknown
