const add = (a, b) => a + b;

// equivalent a => b => a + b
const curriedAdd = (number) =>
  (otherNumber) => add(number, otherNumber);

console.log(curriedAdd(10)(2)); // => 12
