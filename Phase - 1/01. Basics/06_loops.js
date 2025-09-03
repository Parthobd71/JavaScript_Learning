// for loop
for (let i = 0; i < 10; i++) {
    // console.log("Iteration number: " + i);
}

// for loop with break
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    // console.log("Intregation with break " , i +1);

}

// for loop with continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;
    // console.log("Intregation with continue ", i);
}
// while loop for infinite loop 
let j = 0;
while (j < 3) {
    // console.log("While loop iteration: " + j);
    j++;
}
// do-while loop
let k = 0;
do {
    // console.log("Do-While loop : ",  k);
    k++;
} while (k < 3);


// for-off loop array interation
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log("Fruit : ", fruit);
}

//for in loop object iteration
let person = { name: "partho", age: 25 };
for (let key in person) {
    // console.log(`key: ${key}, value: ${person[key]}`);
}

// nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// array iteration with forEach
fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});  