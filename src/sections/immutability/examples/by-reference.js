const bob = { name: 'bob', age: 36 };
const newBob = bob;

console.log(bob); // { name: 'bob', age: 36 };
console.log(newBob); // { name: 'bob', age: 36 };

newBob.age = 20;

console.log(bob); // { name: 'bob', age: 20 };
console.log(newBob); // { name: 'bob', age: 20 };
