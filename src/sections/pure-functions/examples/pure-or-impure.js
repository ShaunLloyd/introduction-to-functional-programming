//Pure or Impure?
const numA = 2;
const numB = 5;

const add = (a, b) => a + b;

const multiplyByB = a => a * numB;

const subtract = (a, b) => {
  const newNum = a - b;
  console.log(newNum);

  return newNum;
};
