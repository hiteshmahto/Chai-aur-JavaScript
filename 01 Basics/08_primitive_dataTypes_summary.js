// JS is a dynamically typed language. This means that variables in JS do not have a fixed type and the type of a variable can change at runtime and no Need for Explicit Type Declarations

let score = 23; // score has number type
score = true; // score type changed to boolean

// DataTypes are categorized into two categories: Primitive types and Reference types (Objects). This categorization is based on how the data is stored and manipulated in memory.

// Primitive Types are immutable (cannot be changed) -> they are called "call by value" because when you assign a primitive value to a variable or pass a primitive value to a function, the actual value is copied. This means that any changes made to the copied value do not affect the original value.
let a = 23;
let b = a;
console.log(`a: ${a}, b: ${b}`);
b = 99; // Changing b does not affect a
console.log(`a: ${a}, b: ${b}`);

// JavaScript has 7 primitive data types:
// 1) String
const firstName = "Hitesh";

// 2) Number: both integers and floating-point numbers
const run = 23;
const PI = 3.14;

// 3) Boolean: either true or false
const isLoggedIn = true;
console.log(typeof isLoggedIn); // boolean

// 4) Undefined: Represents a variable that has been declared but not assigned a value
let userEmail;
console.log(typeof userEmail); // undefined

// 5) Null: Represents the intentional absence of any object value
const outsideTemp = null;
console.log(typeof outsideTemp); // object

// 6) Symbol: Represents a unique and immutable identifier, primarily used for object property keys.
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(typeof id); // symbol

console.log(id); // Symbol(123)
console.log(anotherId); // Symbol(123)

// Check if the symbols are equal
console.log(id === anotherId); // false

// Use symbol as a key in an object
const obj = {
  [id]: "First ID",
  [anotherId]: "Second ID",
};
console.log(obj); // { [Symbol(123)]: 'First ID', [Symbol(123)]: 'Second ID' }

// 7) BigInt: Represents integers with arbitrary precision, useful for large numbers beyond the safe integer limit for Number.
const bigIntNum =
  BigInt(
    9007199254740991938498394893489384983498394834983948934893849834983498394898n
  );
console.log(bigIntNum);
console.log(typeof bigIntNum); // bigint
