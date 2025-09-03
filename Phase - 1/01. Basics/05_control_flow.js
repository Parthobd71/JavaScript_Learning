let age = 10;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

let isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome to the dashboard");
} else {
    console.log("Please login to continue");
}

let num = 5;
if (num > 0) {
    console.log("Number is positive");
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//nested if-else
let username = "admin";
let password = "12345";
if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}

//switch-case
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//Comparison in if-else
    if(num >= 5 && num <= 10){
        console.log("Number is between 5 and 10");
    }



    // logical operators in if-else
let isAdult = false;
let hasID = false;
if (isAdult && hasID) {
    console.log("You can enter the club");
} else {
    console.log("You cannot enter the club");
}

let marks = 38;
let result = (marks >= 80) ? "A" : (marks >= 60) ? "B" : (marks >= 40) ? "C" : "F";
console.log("Your grade is: ", result);


/* we explored
1. if-else
2. nested if-else
3. switch-case
4. Comparison in if-else
5. logical operators in if-else
6. Ternary Operator
*/