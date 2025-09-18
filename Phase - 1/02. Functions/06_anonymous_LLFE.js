let greet = function (name) {
    return "Hello, " + name + " !";
}
console.log(greet('Partho'));

setTimeout(function () {
    console.log("This message is shown after 3 seconds");
}, 3000);

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log("number: ", num);
});

(function () {
    console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();

(function (x, y) {
    console.log("Sum from IIFE: ", x + y);
}(5, 10));
(() => {
    console.log("This is an IIFE using arrow function");
})();

