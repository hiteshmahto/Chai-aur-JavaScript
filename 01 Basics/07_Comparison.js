// Both sides have the same type of value, so the comparisons are straightforward and predictable

console.log(23 > 24); // false
console.log(10 <= 99); // true
console.log(53 == 24); // false
console.log(23 === 23); // true
console.log(-12 != 12); // true

// Now comes the slightly more complex part

console.log("2" > 1); // The string "2" is converted to the number 2 before comparison (type coercion)
console.log("002" > 1);

console.log(null > 0); // false --> When null is compared to a number, it is converted to 0

console.log(null == 0); // false --> == operator performs type coercion, but the rules are different from those of relational operators (>, <, >=, <=). null is only equal to undefined when using ==, not to any other value

console.log(null == undefined); // true --> == allows type coercion and considers null and undefined to be equal

console.log(null === undefined); // false --> === does not allow type coercion and considers null and undefined to be of different types

console.log(null >= 0); // true --> again when null is compared to a number, it is converted to 0

console.log(undefined > 0); // false because undefined is converted to NaN, and NaN is not greater than 0

console.log(undefined == 0); // false because undefined is only equal to null and undefined, not to 0

console.log(undefined >= 0); // false because undefined is converted to NaN, and NaN is not greater than or equal to 0

// The behavior of undefined in comparisons is indeed different from null because when undefined is converted to a number it gives NaN, and when null is converted to a number it gives 0

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// Strict equality operator
console.log("23" == 23); // true
console.log("23" === 23); // false

console.log("56" > true); // true because "56" is converted to 56, and true is converted to 1, and 56 is greater than 1

console.log("-56" > true); // false because "-56" is converted to -56, and true is converted to 1, and -56 is not greater than 1

// That's all but as much as possible avoid this type of conversion to write understandable and clean code
