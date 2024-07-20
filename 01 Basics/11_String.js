const firstName = "hitesh";
const yearOfBirth = 2003;

const str1 =
  firstName.toUpperCase() + " is " + (2024 - yearOfBirth) + " years old!";
console.log(str1);

// str2 is created using a template literal ``. It is a primitive string
// Primitive strings are immutable, meaning their values cannot be changed once created
// Stored in Stack

const str2 = `${firstName.toUpperCase()} is ${2024 - yearOfBirth} years old!`;
console.log(str2);
console.log(typeof str2);
console.log(str2.length); // 23

// "gameName" is created using the String constructor. It is a string object, not a primitive.
// While the content of the string object itself is immutable, the object can have properties added or changed.
// String objects are stored in heap memory.

const gameName = new String("freeFire");
console.log(gameName);
console.log(typeof gameName); // object
console.log(gameName.__proto__);
