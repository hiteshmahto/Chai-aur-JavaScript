const value = 123;
const negativeValue = -value;
console.log(negativeValue); // -123

// Exponential Operator (**)
console.log(4 ** 3); // 64

const str1 = "Hitesh ";
const str2 = "Mahto";
const str3 = str1 + str2; // concatenation
console.log(str3); // Hitesh Mahto

console.log("5" + 2); // 52
console.log(5 + "2"); // 52

console.log("4" + 5 + 3); // 453
console.log(4 + 5 + "3"); // 93
/*
Explanation of `console.log("4" + 5 + 3);` and `console.log(4 + 5 + "3");` in JavaScript:

1. console.log("4" + 5 + 3);
   - JavaScript evaluates expression from left to right
   - "4" + 5 results in "45" (string + number → string)
   - "45" + 3 results in "453" (string + number → string)
   - Output: "453"

2. console.log(4 + 5 + "3");
   - JavaScript evaluates from left to right
   - 4 + 5 results in 9 (number + number → number)
   - 9 + "3" results in "93" (number + string → string)
   - Output: "93"

Key Point: When a string is involved in addition, the other operand is converted to a string and concatenated.
*/

// the unary plus operator (+) is used to convert a value to a number
console.log(+true); // 1
// console.log(true+); // ERROR
console.log(+""); // 0
console.log(+{}); // NaN
console.log(+-Infinity); // -Infinity
console.log(+Infinity); // Infinity
console.log(+undefined); // NaN
console.log(+null); // 0

let num1, num2, num3;
num1 = num2 = num3 = (3 * 4) / 2;
console.table([num1, num2, num3]);

// Pre and Post Increment/Decrement Operator
let gameCounter = 100;
console.log(gameCounter++); // 100
console.log(++gameCounter); // 102
console.log(--gameCounter); // 101
console.log(gameCounter--); // 101
console.log(gameCounter--); // 100
console.log(++gameCounter); // 100
console.log(gameCounter++); // 100
console.log(++gameCounter); // 102
console.log(gameCounter); // 102
