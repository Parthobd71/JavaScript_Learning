let x = 10; //block scope
x = 20;
console.log("let x =", x);

var y = 20; //function scope
y = 25;
console.log("var y =", y);

const z = 30; //block scope, cannot be reassigned
console.log("const z =", z);


//scope example
if (true) {
    let a = 50;
    var b = 60;
    console.log("inside block: a =", a, "b =", b);
}

console.log("outside block: b =", b); // b is accessible here

// a = 100; // a is not accessible here, will throw an error if uncommented
// console.log("a =", a); // This will throw an error because 'a' is not defined in this scope


let p =1, q =2, r=3; //multiple declarations
console.log("p =", p, "q =", q, "r =", r);

x = 15;
console.log("Resaainment value of x =", x);

y = 30;
console.log("Resaainment value of y =", y);

// const z = z + 10; // This will throw an error because 'z' is a constant and cannot be reassigned 

let firstName;
firstName = "John";
console.log("firstName =", firstName);

var lastName;
lastName = "Doe";
console.log("lastName =", lastName);

console.log("Full Name =", firstName + " " + lastName);

let nullVar = null; //explicitly assigned null value
console.log("nullVar =", nullVar);

let undefinedVar; //implicitly undefined
console.log("undefinedVar =", undefinedVar);

/*we experlore 
1. let, var, const
2. scope of variables
3. reassignment
4. multiple declarations
5. initialization
6. null vs undefined
*/
