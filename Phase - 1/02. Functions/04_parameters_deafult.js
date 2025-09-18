function greet (name = 'guest'){
    console.log("welcome ", name);
    }
    greet(); // welcome guest
    greet('Partho'); // welcome Partho

    function add (a =0, b = 0){
    return a + b;
    }
    console.log("sum: ", add(5, 10)); // sum:  15
    console.log("sum with default: ", add()); // sum with default:  0
    console.log("sum with one default: ", add(5)); // sum with one default:  5
    
    function welcomeMessage(user = "unknown"){
        console.log(`welcome  ${user}!`);        
    }
    welcomeMessage();
    welcomeMessage('Partho');