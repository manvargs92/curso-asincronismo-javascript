// CALLBACKS
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum)); //no es necesario pasar los parentesis a "sum" ni los argumentos


// SETTIMEOUT
setTimeout(() => { //setTimeout ya es un callback
    console.log("Hola JavaScript");
}, 5000);

function greetings(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greetings, 2000, "Manuel");