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

// "gameName" is created using the String constructor. It is a string object, not a primitive
// While the content of the string object itself is immutable, the object can have properties added or changed.
// String objects are stored in heap memory

const gameName = new String(
  "Where in America is Carmen Sandiego?: The Great Amtrak Train Adventure"
);
console.log(gameName);
console.log(typeof gameName); // object

// gameName is not an array it is an object with it's key: value pair
console.log(gameName[23]); // m
console.log(gameName["23"]); // m

// printing prototype
console.log(gameName.__proto__);

// length of the string
console.log(gameName.length); // 70

// toUpperCase() --> these method doesn't change the existing string instead they return new string
console.log(gameName.toUpperCase());
console.log(gameName);

// charAt() - used to return the character at a specified index in a string. Indexing is 0-based
console.log(gameName.charAt(2)); // e

// indexOf() - used to determine the position of the first occurrence of a specified value in a string. If the value is not found, it returns -1
console.log(gameName.indexOf("in")); // 6
console.log(gameName.indexOf("IN")); // -1

// substring() - used to extract a portion of a string between two specified indices
const extractedSubstring = gameName.substring(8, 16);
console.log(extractedSubstring); // America

const anotherSubstring = gameName.substring(60, gameName.length);
console.log(anotherSubstring); // Adventure

// substring() - Does not support negative indices; any negative value is treated as 0
console.log(gameName.substring(-23, 5)); // Where

// Swaps the indices if startIndex is greater than endIndex
console.log(gameName.substring(10, 1)); // here in A
