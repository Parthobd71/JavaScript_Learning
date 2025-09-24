function outer(){
    let outerVar = 'outer';
    function inner (){
        console.log(outerVar);
           };
           inner();
}
outer(); // outer

{
    let x = 10;
    const y = 20;
    console.log(x, y); // 10 20
    
}

let globakVar = 'global';
function checkScoper(){
    let localVar = 'local';
console.log(globakVar); // global
console.log(localVar); // local
}
checkScoper();

uniDun();
function uniDun(){
    console.log('uniDun');
} // uniDun

console.log(hostedVar); // undefined
var hostedVar = 'hosted';