// strings to number 
let str = "123";
str = Number(str); // converts string to number
// console.log("str = ",str, "Type of str : ", typeof str); // 123 'number'

let usernaneme = "12John";
// console.log("username = ",Number(usernaneme)); // NaN

//number to string
let num = 123;
num = String(num);
// console.log("num = ",num, "Type of num : ", typeof num); // '123' 'string'

// Boolean 
// console.log("Boolean of 0: ", Boolean(0)); // false
// console.log("Boolean of 1: ", Boolean(1)); // true
// console.log("Boolean of Empty string' ': ", Boolean('')); // false
// console.log("Boolean of Non-Empty string'John': ", Boolean('John')); // true
// console.log("Boolean of null: ", Boolean(null)); // false
// console.log("Boolean of undefined: ", Boolean(undefined)); // false
// console.log("Boolean of NaN: ", Boolean(NaN)); // false
// console.log("Boolean of 123: ", Boolean(123)); // true





//implicit Type Conversion
console.log("5 + '5' = ", 5 + '5'); // '55'
console.log("5 - '2' = ", 5 - '2'); // 3
console.log("5 * '2' = ", 5 * '2'); // 10
console.log("5 / '2' = ", 5 / '2'); // 2.5
console.log("5 * 'John' = ", 5 * 'John'); // NaN
console.log("5 + true = ", 5 + true); // 6
console.log("5 + false = ", 5 + false); // 5
console.log("5 + null = ", 5 + null); // 5
console.log("5 + undefined = ", 5 + undefined); // NaN


//parseInt and parseFloat
let floatString = "12.50"
console.log("Using parseInt : ", parseInt(floatString)); // 12
console.log("Using parseFloat : ", parseFloat(floatString)); // 12.5
console.log("Using Number : ", Number(floatString)); // 12.5

//boolean conversion in condition
if (Boolean(" ")) console.log("it will not run");
if (Boolean("John")) console.log("it will run");

let age = 50;
console.log(`you are ${age} years old`); // you are &{age} years old

