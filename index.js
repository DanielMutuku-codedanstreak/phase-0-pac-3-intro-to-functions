// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("Dance"); // passing the argument 'anything' into our function

  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
  
  sayHelloTo("Isabel"); // "Hello, Isabel!"
  sayHelloTo("Jane"); // "Hello, Jane!"
  sayHelloTo("R2-D2"); // "Hello, R2-D2!"
  sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }

  say("Goodbye", "Julio");

  function add(x, y) {
    return x + y;
  }

  add(1,2);
  console.log(add(1, 2));

  function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }