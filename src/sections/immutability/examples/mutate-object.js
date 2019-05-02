const bob = { name: 'bob', age: 35 };

// KABOOM - bob cannot be reassigned
bob = { name: 'other bob', age: 40 };

bob.age = 40;
console.log(bob); // { name: 'bob', age: 40 };
