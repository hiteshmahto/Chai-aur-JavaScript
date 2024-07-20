// Two main types of memory allocation mechanisms are used: stack and heap

// Primitive Types (Stack Memory) - number, string, boolean, undefined, null, symbol, and bigint are stored in the stack. When you assign a primitive value to a variable, the actual value is copied
// The stack is used for static memory allocation, meaning that the size and lifespan of the variables are known at compile time

let a = 10;
let b = a; // b gets a copy of the value 10
a = 20;
console.log(a); // 20
console.log(b); // 10

// Reference Types (Heap Memory)
// Reference types include objects, arrays, and functions. When you assign a reference type to a variable, the reference (or pointer) to the actual object in the heap is given, not a copy of the object itself.
let obj1 = {
  firstName: "Hitesh",
  age: 20,
  city: "Jaipur",
};
let obj2 = obj1; // obj2 gets a reference to the same object

obj1.name = "Neha";

console.log(obj1.name); // Neha
console.log(obj2.name); // Neha
