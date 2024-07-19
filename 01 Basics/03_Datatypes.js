// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
// Strict mode makes it easier to write "secure" JavaScript.
// Strict mode changes previously accepted "bad syntax" into real errors.

"use strict"; // treat all JS code as newer version

// x = 23; // This will cause an error in 'strict mode'

// The alert function is not used in Node.js because it is a function that is part of the Web APIs provided by the browser environment. Node.js is a runtime environment for executing JavaScript code on the server-side, outside of the browser
// alert(3 * 3);

// Here we will find the original documentation of javascript standards `https://tc39.es/ecma262/`

// data types can be categorized into two main types: primitive and non-primitive (object) types

// Primitive Data Type -
// Number
let age = 20;
console.log(`Value - ${age}, Type - ${typeof age}`);

// String
let firstName = "Hitesh";
console.log(`Value - ${firstName}, Type - ${typeof firstName}`);

// Boolean
let isLoggedIn = true;
console.log(`Value - ${isLoggedIn}, Type - ${typeof isLoggedIn}`);

// undefined
let future;
console.log(`Value - ${future}, Type - ${typeof future}`);

// null - Represents the intentional absence of any object value
let empty = null;
console.log(`Value - ${empty}, Type - ${typeof empty}`);

// Symbol - Represents a unique and immutable primitive value and may be used as the key of an object property.

// BigInt - Represents integers with arbitrary precision. It's used for values larger than the Number type can represent.
let bigInt = BigInt(1234567890123456789012345678901234567890n);
console.log(`Value - ${bigInt}, Type - ${typeof bigInt}`);

// Non-Primitive Data Type - Objects
