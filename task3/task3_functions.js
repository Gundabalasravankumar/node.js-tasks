// Function declaration: add and return two numbers.
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("Sum =", addNumbers(10, 20));

// A function can receive parameters and return a calculated value.
function calculateArea(length, width) {
  return length * width;
}

console.log("Area =", calculateArea(10, 5));

const greetUser = function (name) {
  return `Welcome ${name}!`;
};

// Call the function expression with a name.
console.log(greetUser("John"));

// Arrow function with two parameters and an implicit return value.
const multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log("Result =", multiplyNumbers(4, 5));

// Arrow function that formats multiple values as a sentence.
const getUserInfo = (name, age) => `${name} is ${age} years old`;

console.log(getUserInfo("John", 25));

// reduce() combines every array value into one total.
const numbers = [10, 20, 30, 40, 50];
const calculateTotal = (values) => values.reduce((total, value) => total + value, 0);

console.log("Total =", calculateTotal(numbers));

// Objects in an array can be transformed, filtered, searched, and iterated.
const users = [
  { name: "John", age: 25 },
  { name: "David", age: 30 },
  { name: "Sam", age: 20 }
];

// map() creates an array containing only the user names.
console.log(users.map((user) => user.name));
// filter() keeps every user older than 25.
console.log(users.filter((user) => user.age > 25));
// find() returns the first matching user.
console.log(users.find((user) => user.name === "David"));

// forEach() runs a callback once for every user.
users.forEach((user) => {
  console.log(`${user.name} - ${user.age}`);
});

// A callback is a function passed into another function.
const processUser = (name, callback) => callback(name);

processUser("John", (name) => {
  console.log("Processing user:", name);
});

// A Promise represents a value that is available asynchronously.
const userDataPromise = new Promise((resolve) => {
  resolve("User data received successfully");
});

// async/await lets asynchronous code be written in a readable sequence.
async function getUser() {
  try {
    console.log("Fetching user data...");
    console.log(await userDataPromise);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();