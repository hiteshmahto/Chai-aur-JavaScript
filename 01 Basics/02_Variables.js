const accountId = 204425;
let accountEmail = "hitesh@oracle.com";
var accountPassword = "password@123";
accountCity = "Jaipur"; // don't declare variable like this at all

// accountId = 12234; // ERROR: Assignment to constant variable.

accountEmail = "hitesh@google.com";
accountPassword = "google@124";
accountCity = "Pune";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);

// Why we can't use 'var' anymore - Problem with 'var'

// Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped.

// Hoisting of 'var'
console.log(globalVariable); // undefined

// The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
var globalVariable = 23;

// var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
function func() {
  var funcVariable = true;
  console.log(funcVariable); // true
  console.log(globalVariable); // 23
}

// console.log(funcVariable); // ERROR: funcVariable is not defined
console.log(globalVariable); // 23
func();

// var variables can be re-declared and updated
var abc = 23;
var abc = 11;
console.log(abc); // 11

// There's a weakness that comes with  var. I'll use the example below to explain:

var greeter = "hey hi";

if (true) {
  var greeter = "say Hello instead"; // previous value of 'greeter' is being polluted by this new value
}

console.log(greeter); // "say Hello instead"

// Conclusion: prefer not to use 'var'
