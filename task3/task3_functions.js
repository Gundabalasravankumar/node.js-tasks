function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("Sum =", addNumbers(10, 20));

function calculateArea(length, width) {
  return length * width;
}

console.log("Area =", calculateArea(10, 5));

const greetUser = function (name) {
  return `Welcome ${name}!`;
};

console.log(greetUser("John"));

const multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log("Result =", multiplyNumbers(4, 5));

const getUserInfo = (name, age) => `${name} is ${age} years old`;

console.log(getUserInfo("John", 25));

const numbers = [10, 20, 30, 40, 50];
const calculateTotal = (values) => values.reduce((total, value) => total + value, 0);

console.log("Total =", calculateTotal(numbers));

const users = [
  { name: "John", age: 25 },
  { name: "David", age: 30 },
  { name: "Sam", age: 20 }
];

console.log(users.map((user) => user.name));
console.log(users.filter((user) => user.age > 25));
console.log(users.find((user) => user.name === "David"));

users.forEach((user) => {
  console.log(`${user.name} - ${user.age}`);
});

const processUser = (name, callback) => callback(name);

processUser("John", (name) => {
  console.log("Processing user:", name);
});

const userDataPromise = new Promise((resolve) => {
  resolve("User data received successfully");
});

async function getUser() {
  try {
    console.log("Fetching user data...");
    console.log(await userDataPromise);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();