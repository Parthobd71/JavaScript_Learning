const greet = () => console.log('Hello, welcome to JavaScript functions!');
greet();

const greetUser = (name) => console.log("welcome ", name);
greetUser('Partho');

const square = num => num * num;
console.log("squre: ", square(5));

const add = (a, b) => a + b;
console.log("sum: ", add(5, 10));

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log("doubled: ", doubled);

let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("sum using reduce: ", sum);