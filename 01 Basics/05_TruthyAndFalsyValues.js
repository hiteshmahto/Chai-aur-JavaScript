// Falsy Values is a value that translates to false when evaluated in a Boolean context

// Some Examples of Falsy Values are: false, 0, -0, "", null, undefined, NaN and 0n -> The BigInt zero.

// Boolean Conversion of every falsy value
console.log(`Value: ${false} => ${Boolean(false)}`);
console.log(`Value: ${0} => ${Boolean(0)}`);
console.log(`Value: ${-0} => ${Boolean(-0)}`);
console.log(`Value: ${""} => ${Boolean("")}`);
console.log(`Value: ${null} => ${Boolean(null)}`);
console.log(`Value: ${undefined} => ${Boolean(undefined)}`);
console.log(`Value: ${NaN} => ${Boolean(NaN)}`);
console.log(`Value: ${0n} => ${Boolean(0n)}`);

// Some Truthy Values - {}, [], anyNumber, anyString
console.log(`Value: ${{}} => ${Boolean({})}`);
console.log(`Value: ${[]} => ${Boolean([])}`);
