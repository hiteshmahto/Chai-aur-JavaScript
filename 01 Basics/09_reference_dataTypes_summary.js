// Reference Types (Objects) are more complex data structures that can hold multiple values and properties. Objects are mutable and are stored and manipulated by reference

// Arrays
const heros = ["Shaktiman", "Naagraj", "Doga"];
console.log(typeof heros); // object

// Objects
const me = {
  firstName: "Hitesh",
  lastName: "Mahto",
  age: 20,
};
console.log(typeof me); // object

// Functions
const myFunction = function () {
  console.log("Hello World!!");
};
console.log(typeof myFunction); // function
// functions are a special type of object, but their type is "function" when you use the typeof operator
// Functions in JS are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions. Despite being objects, the typeof operator returns "function" for functions, which helps differentiate them from other object types.

// typeof operator on a variable that has not been defined, JS does not throw an error. Instead, it returns the string "undefined"
console.log(typeof this_variable_is_not_defined);
