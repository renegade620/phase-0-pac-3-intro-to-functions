// Follow along with the examples here
function doNothing() { }

function sayHello() {
    console.log("Hello!");
}

sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

sayHelloToGuadalupe();
console.log("\n");

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}

sayHelloToLiz();
console.log("\n");

function sayHelloToSanip() {
    console.log("Hello, Sanip!");
}

sayHelloToSanip();
console.log("\n");

function sayHelloToAnyone(fname) {
    console.log(`Hello, ${fname}!`);
}

sayHelloToAnyone("Moraa");
let arr = ["Gregory", "Anthony"];
sayHelloToAnyone(arr);
console.log("\n");


function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}

say("Goodbye", "Julio");
console.log("\n");


function add(x, y) {
    return x + y;
}

console.log(add(1, 2));
console.log("\n");

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

console.log(say("Hello", "Liz"));
console.log("\n");

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}

console.log(say("Hello", "Liz"));
console.log("\n");

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}

console.log(say("Howdy", "partner"));
console.log("\n");

function studentHonours(fname, honours) {
    return `${fname} got a ${honours}`
}

console.log(studentHonours("Frankline", "Second Class Upper"));