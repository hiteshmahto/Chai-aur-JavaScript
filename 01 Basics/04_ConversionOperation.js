let score = "33";

console.log(`Value: ${score}, Type: ${typeof score}`);
// console.log(typeof(score)); // You can write like this also

let valueInNumber = Number(score);
console.log(`Value: ${valueInNumber}, Type: ${typeof valueInNumber}`);

console.log(`NaN, Type: ${typeof NaN}`); // type of NaN is number

let x = "2335abcd";
let xInNumber = Number(x);
console.log(`Value: ${xInNumber}, Type: ${typeof xInNumber}`); // Value: NaN, Type: number

console.log(Number(1234)); // 1234
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number("")); // 0
console.log(Number("hitesh")); // NaN

// Summary of conversion into Number:
// "123" => 123
// "123abc" => NaN
// null => 0
// undefined => NaN
// true => 1, false => 0
// "" => 0

let isLoggedIn = 1;
console.log(`Value: ${isLoggedIn}, Type: ${typeof isLoggedIn}`);
isLoggedIn = Boolean(isLoggedIn);
console.log(`Value: ${isLoggedIn}, Type: ${typeof isLoggedIn}`);

// Number to String
const someNumber = 23;
const stringNumber = String(someNumber);

console.log(`Value: ${stringNumber}, Type: ${typeof stringNumber}`);
